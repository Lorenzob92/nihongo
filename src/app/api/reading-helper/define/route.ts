import { generateText } from "ai";
import { gateway } from "@ai-sdk/gateway";

export const runtime = "edge";

const SYSTEM = `You are a Japanese-to-English dictionary helper for a learner. The user gives you a single short Japanese fragment (one bubble of manga dialogue, often a single word or short phrase). Reply with:

- The fragment, with kanji + reading + meaning. Example: 食べる (たべる) — to eat (Ichidan verb).
- If it's a phrase: a literal gloss + a natural English translation.
- One concise grammar note if the form matters (e.g., "te-form of 食べる").

Keep it under 80 words. Plain text only, no markdown. British English. NEVER use em-dashes or en-dashes; use commas, periods, colons, parens. The user does not need formality, just speed.`;

type DefineRequest = { text: string };

export async function POST(req: Request) {
  if (!process.env.AI_GATEWAY_API_KEY && !process.env.ANTHROPIC_API_KEY && !process.env.VERCEL) {
    return Response.json(
      {
        error: "ai_not_configured",
        definition: "AI lookup unavailable. Open Jisho via the link below for a dictionary entry.",
      },
      { status: 200 },
    );
  }

  let body: DefineRequest;
  try {
    body = (await req.json()) as DefineRequest;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const text = body.text?.trim();
  if (!text) return Response.json({ error: "empty_input" }, { status: 400 });
  if (text.length > 200) return Response.json({ error: "too_long" }, { status: 400 });

  try {
    const { text: out } = await generateText({
      model: gateway("anthropic/claude-haiku-4-5"),
      system: SYSTEM,
      prompt: text,
      providerOptions: {
        gateway: { caching: "auto" },
      },
    });
    return Response.json({ definition: out });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return Response.json({ error: "ai_call_failed", message }, { status: 500 });
  }
}
