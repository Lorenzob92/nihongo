import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    status: "ok",
    app: "nihongo",
    version: "v0",
    phase: "bridge",
    builtAt: new Date().toISOString(),
  });
}
