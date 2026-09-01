import { ChevronDown, ChevronUp } from "lucide-react";

interface ShowMoreButtonProps {
  expanded: boolean;
  onToggle: () => void;
  moreLabel: string;
  lessLabel: string;
  count?: number;
}

export function ShowMoreButton({
  expanded,
  onToggle,
  moreLabel,
  lessLabel,
  count,
}: ShowMoreButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-xl border-0 bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground shadow-card transition-colors hover:bg-primary/90"
    >
      {expanded ? lessLabel : count ? `${moreLabel} (+ ${count})` : moreLabel}
      {expanded ? (
        <ChevronUp className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      )}
    </button>
  );
}
