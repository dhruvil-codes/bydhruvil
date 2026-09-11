"use client";

import React, { useState } from "react";
import {
  AnnotatedText,
  type AnnotationVariant,
} from "@/components/services/annotated-text";

interface ServiceItem {
  id: string;
  title: string;
  variant: AnnotationVariant;
  detail: string;
}

const services: ServiceItem[] = [
  {
    id: "support-agents",
    title: "Customer support agents",
    variant: "wavy",
    detail:
      "Trained on your store documentation, return policies, and FAQs. Handles recurring customer tickets, queries Shopify for live order statuses, and hands off conversations to human staff in Crisp or Zendesk when confidence drops below 85%.",
  },
  {
    id: "knowledge-bots",
    title: "Internal knowledge bots",
    variant: "wavy",
    detail:
      "Connected to Notion workspaces, Google Drive folders, or GitHub markdown repos. Answers staff technical questions in Slack or Discord, links the exact source file and section, and explicitly admits when information is missing instead of hallucinating.",
  },
  {
    id: "ops-automation",
    title: "Ops and reporting automation",
    variant: "wavy",
    detail:
      "Eliminates manual data entry between incoming Gmail order notifications, Stripe webhooks, and Google Sheets. Deployed as containerized Python microservices inside your Google Cloud Run or AWS account. Dispatches daily executive summaries and failure alerts.",
  },
  {
    id: "lead-response",
    title: "Inbound lead response",
    variant: "wavy",
    detail:
      "Monitors inbound contact submissions, enriches prospect company domains via Clearbit or Apollo, scores the lead, and generates contextual email replies in under two minutes for sales reps to approve or send.",
  },
  {
    id: "audits",
    title: "Implementation audits",
    variant: "wavy",
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
            <li key={item.id} className="space-y-1">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-baseline justify-between text-left group cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium leading-[1.6]">
                  <AnnotatedText variant={item.variant}>
                    {item.title}
                  </AnnotatedText>
                </span>
                <span
                  className="font-mono text-xs text-muted-foreground ml-3 shrink-0 select-none group-hover:text-foreground transition-colors"
                  aria-hidden="true"
                >
                  {isOpen ? "[−]" : "[+]"}
                </span>
              </button>

              {isOpen && (
                <p className="mt-1.5 text-[14px] leading-[1.6] text-neutral-600 dark:text-neutral-400">
                  {item.detail}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <p className="text-[15px] leading-[1.6] text-neutral-600 dark:text-neutral-400 pt-2">
        Fixed scope, fixed price, starting at{" "}
        <AnnotatedText variant="highlight">$450</AnnotatedText>, depending on
        scope.
      </p>
    </div>
  );
}
