import { streamText } from "ai";
import { gateway } from "@ai-sdk/gateway";
import {
  buildConversationPrompt,
  type ConversationContext,
} from "@/lib/constants/conversation";

export const runtime = "edge";

type Message = { role: "user" | "assistant"; content: string };

type RequestBody = {
  context: ConversationContext;
  messages: Message[];
};

export async function POST(req: Request) {
  if (!process.env.AI_GATEWAY_API_KEY && !process.env.ANTHROPIC_API_KEY && !process.env.VERCEL) {
    return Response.json(
      {
        error: "ai_not_configured",
        message:
          "AI features need an AI_GATEWAY_API_KEY or ANTHROPIC_API_KEY in environment variables.",
      },
      { status: 503 },
    );
  }

  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const { context, messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "no_messages" }, { status: 400 });
  }

  try {
    const result = streamText({
      model: gateway("anthropic/claude-sonnet-4-6"),
      system: buildConversationPrompt(context),
      messages,
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
