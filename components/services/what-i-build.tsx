"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  detail: string;
}

const services: ServiceItem[] = [
  {
    id: "support-docs",
    title: "1. Support and docs assistant",
    detail:
      "Give customers or staff answers from your approved documentation, with links back to the source. If the answer is missing or uncertain, the assistant says so and hands it to your team. Start with one channel and a small set of documents. We can quote helpdesk, order-status, Slack or Drive connections once we have checked access and scope.",
  },
  {
    id: "receptionist-leads",
    title: "2. Receptionist and lead intake",
    detail:
      "Turn routine enquiries into clear next steps: answer approved FAQs, collect the right details, suggest a slot and hand complex questions to a person. Voice, calendar booking and CRM updates are separate production work. My Saral AI voice receptionist is shipped; ask for a workflow prototype or discovery first to see how we can adapt it for your team.",
  },
  {
    id: "workflow-audit",
    title: "3. AI workflow audit",
    detail:
      "Already using an LLM? I'll review one workflow for failure modes, latency, model spend, data handling and evaluation gaps, then give you a prioritized written fix list. This is advice, not a production rebuild.",
  },
];

export function WhatIBuild() {
  // All open by default, each independently toggleable
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "support-docs": true,
    "receptionist-leads": true,
    "workflow-audit": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-3 list-none p-0">
        {services.map((item) => {
          const isOpen = openItems[item.id];
          return (
            <li key={item.id} className="border-b border-border/40 pb-3 last:border-b-0 space-y-1">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between text-left group cursor-pointer py-1"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                  {item.title}
                </span>
                <span
                  className="font-mono text-xs text-muted-foreground ml-3 shrink-0 select-none group-hover:text-foreground transition-colors"
                  aria-hidden="true"
                >
                  {isOpen ? "[−]" : "[+]"}
                </span>
              </button>

              {isOpen && (
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground pt-1">
                  {item.detail}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
