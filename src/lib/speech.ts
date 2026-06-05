// Browser SpeechSynthesis wrapper for Japanese audio.
// VOICEVOX is the Phase 2 upgrade; this is the free fallback that
// works on macOS, iOS Safari, and Chrome out of the box.

const READING_PARENS = /[（(]\s*[ぁ-んァ-ヶー\s]+\s*[）)]/g;

export function isSpeechAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function stripReadingGlosses(text: string): string {
  return text.replace(READING_PARENS, "");
}

let cachedJaVoice: SpeechSynthesisVoice | null = null;

function scoreVoice(v: SpeechSynthesisVoice): number {
  const name = v.name;
  let score = 0;
  // Cloud / neural voices that ship in Chrome and Edge.
  if (/google/i.test(name)) score += 100;
  if (/microsoft.+(neural|online)/i.test(name)) score += 95;
  // Apple Siri voices are the best macOS / iOS option.
  if (/siri/i.test(name)) score += 90;
  // Apple "(Premium)" or "(Enhanced)" downloadable voices.
  if (/premium/i.test(name)) score += 80;
  if (/enhanced/i.test(name)) score += 70;
  // Standard female / male macOS Japanese voices.
  if (/kyoko/i.test(name)) score += 30;
  if (/otoya/i.test(name)) score += 30;
  // Default voice gets a small bump.
  if (v.default) score += 5;
  return score;
}

function pickJapaneseVoice(): SpeechSynthesisVoice | null {
  if (cachedJaVoice) return cachedJaVoice;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const jaVoices = voices.filter(
    (v) => v.lang === "ja-JP" || v.lang.startsWith("ja"),
  );
  if (!jaVoices.length) return null;
  jaVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a));
  cachedJaVoice = jaVoices[0];
  return cachedJaVoice;
}

// On Chrome the voice list loads asynchronously. Reset the cache when
// the list changes so the picker sees Google's neural voice when it lands.
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.addEventListener?.("voiceschanged", () => {
    cachedJaVoice = null;
  });
}

export function speakJapanese(text: string, opts?: { rate?: number }): void {
  if (!isSpeechAvailable()) return;
  const clean = stripReadingGlosses(text).trim();
  if (!clean) return;
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = "ja-JP";
  u.rate = opts?.rate ?? 0.9;
  const voice = pickJapaneseVoice();
  if (voice) u.voice = voice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export function stopSpeaking(): void {
  if (!isSpeechAvailable()) return;
  window.speechSynthesis.cancel();
}
