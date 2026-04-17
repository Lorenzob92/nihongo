import type { Metadata } from "next";
import { ConversationClient } from "@/components/conversation/ConversationClient";

export const metadata: Metadata = {
  title: "Conversation partner",
  description:
    "Chat with Claude as a patient native Japanese friend. Text mode V1.",
};

export default function ConversationPage() {
  return <ConversationClient />;
}
