"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Crosshairs } from "@/components/ui/crosshairs";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const faqItems: FAQItem[] = [
  {
    id: "who-is-dhruvil",
    question: "Who is Dhruvil Mistry?",
    answer: "Dhruvil Mistry is an AI Engineer based in Mumbai, India. He specializes in shipping production-grade LLM systems, RAG pipelines, and full-stack AI applications that solve real-world problems.",
  },
  {
    id: "what-has-dhruvil-built",
    question: "What has Dhruvil Mistry built?",
    answer: "Dhruvil has built several notable AI products: Minutz (an AI meeting intelligence platform selected at the OpenAI hackathon), Saral AI (a low-latency Voice AI Receptionist for MSMEs), Skin Cure (an AI dermatology classifier), and Clarity (a multi-provider Chrome reading assistant extension).",
  },
  {
    id: "what-tech-dhruvil-uses",
    question: "What technologies does Dhruvil Mistry specialize in?",
    answer: "He specializes in Python, FastAPI, Next.js, React, LangChain, LlamaIndex, vector databases (Qdrant, Pinecone, ChromaDB), and integrating frontier LLMs from OpenAI, Anthropic, and Gemini.",
  },
  {
    id: "is-dhruvil-open-to-work",
    question: "Is Dhruvil Mistry open to work?",
    answer: "Yes, Dhruvil is actively seeking AI Engineer, GenAI Engineer, or LLM Engineer roles at funded, fast-moving startups. He is based in Mumbai, India, and open to remote or on-site opportunities.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative border-x border-edge screen-line-before screen-line-after"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">
          Frequently Asked Questions
        </h2>
      </header>
      <div className="p-4 sm:p-6 space-y-4">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border border-border rounded-xl overflow-hidden transition-all bg-card/50 hover:bg-card hover:shadow-sm"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-sm sm:text-base text-foreground transition-colors cursor-pointer select-none focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-btn-${item.id}`}
              >
                <span itemProp="name">{item.question}</span>
                <span className="ml-4 shrink-0 text-muted-foreground">
                  {isOpen ? (
                    <Minus className="h-4 w-4 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-4 w-4 transition-transform duration-200" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-4 pb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-3">
                      <p itemProp="text">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
