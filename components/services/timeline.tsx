import React from "react";
import { cn } from "@/lib/utils";

interface AgendaStep {
  period: string;
  detail: string;
  subtext?: string;
}

const steps: AgendaStep[] = [
  {
    period: "Day 0",
    detail: "20-minute call",
    subtext:
      "We walk through the bottleneck, inspect your current workflow, and verify required data access.",
  },
  {
    period: "Day 1",
    detail: "Written scope and fixed price, 50% to start",
    subtext:
      "You receive a 1-page technical spec outlining exact deliverables, architecture, and the fixed price.",
  },
  {
    period: "Day 2-5",
    detail: "Built inside your accounts",
    subtext:
      "I code directly inside your GitHub or cloud infrastructure. You see every commit and pull request as it ships.",
  },
  {
    period: "Day 5",
    detail: "Handover recording, repo transferred",
    subtext:
      "We test the build on live data, transfer repository admin rights, and deliver a recorded video walkthrough.",
  },
  {
    period: "Day 5-12",
    detail: "Anything broken, fixed free",
    subtext:
      "7 days of fixes included. If an unhandled edge case breaks or an API fails, I fix it immediately without extra charge.",
  },
];

interface TimelineProps {
  className?: string;
}

export function Timeline({ className }: TimelineProps) {
  return (
    <div
      className={cn(
        "space-y-4 font-mono text-[15px] leading-[1.6]",
        className
      )}
    >
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
        >
          <span className="w-24 shrink-0 text-muted-foreground text-sm font-mono">
            {step.period}
          </span>
          <div className="space-y-1">
            <p className="text-foreground font-sans text-[15px] font-medium leading-[1.6]">
              {step.detail}
            </p>
            {step.subtext && (
              <p className="text-neutral-500 dark:text-neutral-400 font-sans text-[13px] leading-relaxed">
                {step.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
