"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Mic,
  Send,
  Loader2,
  Eye,
  EyeOff,
  HelpCircle,
  Square,
  AlertTriangle,
} from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import type { ConversationContext } from "@/lib/constants/conversation";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  corrections?: string;
};

const TOPICS: { value: string; label: string }[] = [
  { value: "free", label: "Free chat (no topic)" },
  { value: "好きな漫画について話す", label: "Talk about favourite manga" },
  { value: "東京旅行の計画を立てる", label: "Plan a trip to Tokyo" },
  { value: "ピザにパイナップルは正しいかどうか議論する", label: "Pineapple-on-pizza debate" },
  { value: "ラーメン屋で注文する", label: "Order at a ramen shop" },
  { value: "今週あったことを話す", label: "Tell a story from your week" },
  { value: "カフェで友達と雑談", label: "Cafe friend chat" },
  { value: "面接ロールプレイ", label: "Job interview roleplay (keigo)" },
  { value: "何か文句を言う", label: "Complain about something" },
];

const MOODS = ["普通", "疲れている", "挑戦したい"];
const STORAGE_KEY = "conversation.session";

function parseCorrections(text: string): { clean: string; corrections?: string } {
  const m = text.match(/<corrections>([\s\S]*?)<\/corrections>/);
  if (!m) return { clean: text };
  const corrections = m[1].trim();
  const clean = text.replace(m[0], "").trim();
  return { clean, corrections };
}

export function ConversationClient() {
  const [showFurigana, setShowFurigana] = useState(true);
  const [topic, setTopic] = useState(TOPICS[0].value);
  const [mood, setMood] = useState(MOODS[0]);
  const [targetGrammar, setTargetGrammar] = useState("");
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Restore session from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed.messages?.length) {
          setMessages(parsed.messages);
          setTopic(parsed.topic ?? TOPICS[0].value);
          setMood(parsed.mood ?? MOODS[0]);
          setTargetGrammar(parsed.targetGrammar ?? "");
          setStarted(true);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  // Persist
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!started) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ messages, topic, mood, targetGrammar }),
    );
  }, [messages, topic, mood, targetGrammar, started]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  const buildContext = (): ConversationContext => ({
    userLevel: "N4 (currently studying N3 grammar)",
    weakPoints: "は/が, transitive vs intransitive verb pairs, conditionals (たら/ば/と/なら)",
    targetGrammar: targetGrammar || "（指定なし）",
    recentVocab: "（学習履歴より自動取得予定）",
    mood,
    topic,
  });

  const sendMessage = async (textOverride?: string) => {
    const text = textOverride ?? input.trim();
    if (!text || streaming) return;

    setError(null);
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");

    // Placeholder for assistant
    const assistantId = crypto.randomUUID();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);
    setStreaming(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch("/api/conversation/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: buildContext(),
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
        signal: ctrl.signal,
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({ message: "Request failed" }));
        throw new Error(errBody.message ?? `HTTP ${res.status}`);
      }
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content: acc } : m)),
        );
      }

      // Final parse for corrections
      const { clean, corrections } = parseCorrections(acc);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: clean, corrections } : m,
        ),
      );
    } catch (err) {
      if ((err as Error).name === "AbortError") {
        // user cancelled
      } else {
        setError((err as Error).message);
        setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const startSession = async () => {
    setStarted(true);
    setMessages([]);
    setSummary(null);
    setError(null);
    // Kick off the AI's opening turn by sending a synthetic "system has set scene" trigger.
    // We do this by sending a tiny user message with a meta marker that the prompt will treat
    // as the natural conversation start. Simpler: just let the user send the first turn.
    // We seed an empty assistant placeholder that prompts the user.
  };

  const endSession = async () => {
    if (messages.length === 0) {
      setStarted(false);
      return;
    }
    setSummaryLoading(true);
    try {
      const transcript = messages
        .map((m) => `[${m.role === "user" ? "学習者" : "AI"}]: ${m.content}`)
        .join("\n\n");
      const res = await fetch("/api/conversation/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: { ...buildContext(), topic: "セッションのまとめ" },
          messages: [
            {
              role: "user",
              content: `セッションが終了しました。以下の会話を読んで、英語で簡潔なまとめを書いてください。\n\n形式:\n1. Top errors (3-5)\n2. New vocabulary encountered\n3. Suggestions to review (3)\n4. Patterns\n\n会話:\n${transcript}`,
            },
          ],
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      if (!res.body) throw new Error("No body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setSummary(acc);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSummaryLoading(false);
    }
  };

  const newSession = () => {
    if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setSummary(null);
    setStarted(false);
    setInput("");
  };

  const askForCorrection = () => {
    void sendMessage("私の日本語、大丈夫？");
  };

  const cancel = () => abortRef.current?.abort();

  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-3 flex items-center justify-between gap-3">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3" /> All tools
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFurigana((s) => !s)}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:border-line-strong"
          >
            {showFurigana ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            Furigana {showFurigana ? "on" : "off"}
          </button>
        </div>
      </div>

      <header className="mb-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
            <Mic className="h-5 w-5" />
          </span>
          <Pill tone="recommend">Live · text V1</Pill>
        </div>
        <h1 className="font-display text-2xl text-ink-deep sm:text-3xl">
          Conversation partner{" "}
          <JapaneseText size="xl" className="ml-1 text-muted">
            会話練習
          </JapaneseText>
        </h1>
        <p className="text-sm text-muted">
          A patient Japanese friend who never breaks character. Errors are silently logged and surfaced every 5 turns or on demand.
        </p>
      </header>

      {!started ? (
        <section className="space-y-4 rounded-[16px] border border-line bg-surface p-5">
          <h2 className="font-display text-lg text-ink-deep">Set the scene</h2>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-[10px] border border-line bg-surface p-2 text-sm"
            >
              {TOPICS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">Mood</label>
            <div className="flex gap-2">
              {MOODS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMood(m)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs",
                    mood === m
                      ? "border-accent bg-accent-soft text-accent-deep"
                      : "border-line bg-surface text-ink hover:border-line-strong",
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">
              Target grammar (optional)
            </label>
            <input
              type="text"
              value={targetGrammar}
              onChange={(e) => setTargetGrammar(e.target.value)}
              placeholder="例: 〜てしまう, 〜たほうがいい"
              className="w-full rounded-[10px] border border-line bg-surface p-2 font-jp text-sm"
            />
          </div>
          <Button variant="primary" onClick={startSession}>
            Start chat
          </Button>
        </section>
      ) : (
        <>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Pill tone="muted">Topic: {TOPICS.find((t) => t.value === topic)?.label ?? topic}</Pill>
            <Pill tone="muted">Mood: {mood}</Pill>
            {targetGrammar ? <Pill tone="accent">Grammar focus: {targetGrammar}</Pill> : null}
            <Pill tone="muted">{messages.length} turns</Pill>
          </div>

          <div
            ref={scrollRef}
            className="mb-3 flex-1 overflow-y-auto rounded-[16px] border border-line bg-surface p-4"
            style={{ maxHeight: "55vh" }}
          >
            {messages.length === 0 ? (
              <div className="text-center text-sm text-muted">
                <p className="font-jp text-base">
                  まずはこちらから挨拶してみてください。例:「こんにちは！」
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {messages.map((m) => (
                  <li key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "max-w-[85%] rounded-[14px] px-3.5 py-2.5",
                        m.role === "user"
                          ? "bg-accent text-white"
                          : "bg-surface-soft text-ink-deep",
                      )}
                    >
                      {m.corrections ? (
                        <div className="mb-2 rounded-[8px] bg-amber-500/15 border border-amber-500/25 p-2 text-[11px] text-amber-300">
                          <span className="font-mono uppercase tracking-wider">Correction</span>
                          <p className="mt-1 font-jp">{m.corrections}</p>
                        </div>
                      ) : null}
                      {showFurigana && m.role === "assistant" ? (
                        <JapaneseText className="whitespace-pre-wrap">{m.content || "…"}</JapaneseText>
                      ) : (
                        <p className={cn(m.role === "assistant" && "font-jp", "whitespace-pre-wrap text-sm")}>
                          {m.content || "…"}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {error ? (
            <div className="mb-3 flex items-start gap-2 rounded-[10px] border border-warn/30 bg-[color:var(--warn)]/10 p-3 text-sm text-warn">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-none" />
              <span>{error}</span>
            </div>
          ) : null}

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={2}
                lang="ja"
                placeholder="日本語でどうぞ…"
                className="font-jp flex-1 rounded-[12px] border border-line bg-surface p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20"
                onKeyDown={(e) => {
                  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                    e.preventDefault();
                    void sendMessage();
                  }
                }}
              />
              <div className="flex flex-col gap-2">
                {streaming ? (
                  <Button variant="secondary" onClick={cancel}>
                    <Square className="h-4 w-4" /> Stop
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => void sendMessage()}
                    disabled={!input.trim()}
                  >
                    <Send className="h-4 w-4" /> Send
                  </Button>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={askForCorrection}
                  disabled={streaming || messages.length === 0}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:border-line-strong disabled:opacity-40"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  私の日本語、大丈夫？
                </button>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={endSession} disabled={summaryLoading || streaming}>
                  {summaryLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  End &amp; summarise
                </Button>
                <Button variant="ghost" onClick={newSession}>
                  New session
                </Button>
              </div>
            </div>
          </div>

          {summary ? (
            <section className="mt-6 rounded-[16px] border border-line bg-surface-soft p-5">
              <h2 className="font-display text-lg text-ink-deep">Session summary</h2>
              <pre className="mt-3 whitespace-pre-wrap text-sm text-ink/85">{summary}</pre>
            </section>
          ) : null}
        </>
      )}
    </main>
  );
}
