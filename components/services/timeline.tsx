import React from "react";
import { cn } from "@/lib/utils";

interface AgendaStep {
  period: string;
  detail: string;
  subtext?: string;
}

const steps: AgendaStep[] = [
  {
    period: "Phase 1",
    detail: "20-minute discovery call & scope doc",
    subtext:
      "We define inputs, outputs, systems involved, measurable acceptance test cases, timeline, and a clear fixed price.",
  },
  {
    period: "Phase 2",
    detail: "Architecture & access agreement",
    subtext:
      "We agree where code runs, who has access, and ensure you own all third-party API and model accounts.",
  },
  {
    period: "Phase 3",
    detail: "Build & sample data testing",
    subtext:
      "Tested against your approved sample data with explicit demonstration of failure modes and human-handoff cases.",
  },
  {
    period: "Phase 4",
    detail: "Code delivery & handover note",
    subtext:
      "You receive repository ownership, clean documentation, and a handover note. Any live integration is listed explicitly.",
  },
  {
    period: "Phase 5",
    detail: "7 calendar days of defect fixes",
    subtext:
      "Included fixes for any defects against the agreed scope after handover. New features and ongoing maintenance are separate.",
  },
];

interface TimelineProps {
  className?: string;
}

export function Timeline({ className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-border/40 pb-3 last:border-b-0"
        >
          <span className="w-24 shrink-0 text-muted-foreground text-xs sm:text-sm font-mono">
            {step.period}
          </span>
          <div className="space-y-1">
            <p className="text-foreground font-sans text-sm sm:text-base font-medium">
              {step.detail}
            </p>
            {step.subtext && (
              <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                {step.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
