"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  detail: string;
}

const services: ServiceItem[] = [
  {
    id: "support-agents",
    title: "Customer support agents",
    detail:
      "Trained on your store documentation, return policies, and FAQs. Handles recurring customer tickets, queries Shopify for live order statuses, and hands off conversations to human staff in Crisp or Zendesk when confidence drops below 85%.",
  },
  {
    id: "knowledge-bots",
    title: "Internal knowledge bots",
    detail:
      "Connected to Notion workspaces, Google Drive folders, or GitHub markdown repos. Answers staff technical questions in Slack or Discord, links the exact source file and section, and explicitly admits when information is missing instead of hallucinating.",
  },
  {
    id: "ops-automation",
    title: "Ops and reporting automation",
    detail:
      "Eliminates manual data entry between incoming Gmail order notifications, Stripe webhooks, and Google Sheets. Deployed as containerized Python microservices inside your Google Cloud Run or AWS account. Dispatches daily executive summaries and failure alerts.",
  },
  {
    id: "lead-response",
    title: "Inbound lead response",
    detail:
      "Monitors inbound contact submissions, enriches prospect company domains via Clearbit or Apollo, scores the lead, and generates contextual email replies in under two minutes for sales reps to approve or send.",
  },
  {
    id: "audits",
    title: "Implementation audits",
    detail:
      "Code and architecture review of existing LLM pipelines, prompt chains, token usage, latency bottlenecks, and evaluation coverage. Delivers a written report with identified failure modes, cost optimizations, and actionable code fixes.",
  },
];

export function WhatIBuild() {
  // All open by default, each independently toggleable
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "support-agents": true,
    "knowledge-bots": true,
    "ops-automation": true,
    "lead-response": true,
    "audits": true,
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

      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground pt-2">
        Fixed scope, fixed price, starting at{" "}
        <span className="font-semibold text-foreground">$450</span>, depending on
        scope.
      </p>
    </div>
  );
}
