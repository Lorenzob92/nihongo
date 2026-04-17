import { streamObject } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { ReadingHelperResponseSchema } from "@/lib/schemas/reading-helper";
import { READING_HELPER_SYSTEM_PROMPT } from "@/lib/constants/reading-helper";

export const runtime = "edge";

type ReadingHelperRequest = {
  text: string;
  learnerLevel?: string;
};

export async function POST(req: Request) {
  // If neither AI Gateway nor Anthropic creds are configured, return a friendly stub
  // so the UI can degrade gracefully rather than crashing.
  if (!process.env.AI_GATEWAY_API_KEY && !process.env.ANTHROPIC_API_KEY && !process.env.VERCEL) {
    return Response.json(
      {
        error: "ai_not_configured",
        message:
          "AI features need an AI_GATEWAY_API_KEY or ANTHROPIC_API_KEY in environment variables. See NOTES.md for setup.",
      },
      { status: 503 },
    );
  }

  let body: ReadingHelperRequest;
  try {
    body = (await req.json()) as ReadingHelperRequest;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const { text, learnerLevel = "N4" } = body;

  if (!text || text.trim().length === 0) {
    return Response.json({ error: "empty_input" }, { status: 400 });
  }
  if (text.length > 2000) {
    return Response.json(
      { error: "input_too_long", maxChars: 2000 },
      { status: 400 },
    );
  }

  try {
    const result = streamObject({
      model: gateway("anthropic/claude-sonnet-4-6"),
      schema: ReadingHelperResponseSchema,
      system: READING_HELPER_SYSTEM_PROMPT,
      prompt: `Learner level: ${learnerLevel}\n\nParagraph:\n${text}`,
      providerOptions: {
        gateway: { caching: "auto" },
      },
    });

    return result.toTextStreamResponse();
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return Response.json({ error: "ai_call_failed", message }, { status: 500 });
  }
}
