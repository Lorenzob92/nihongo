import { PhaseIndicator } from "@/components/hub/PhaseIndicator";
import { TodaySession } from "@/components/hub/TodaySession";
import { ProgressRails } from "@/components/hub/ProgressRails";
import { MangaLadderMini } from "@/components/hub/MangaLadderMini";
import { QuickActions } from "@/components/hub/QuickActions";

export default function HubPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 sm:py-8">
      <PhaseIndicator />
      <ProgressRails />
      <TodaySession />
      <MangaLadderMini />
      <QuickActions />
    </main>
  );
}
