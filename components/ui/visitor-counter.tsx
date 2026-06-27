"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { ConfettiButton } from "@/components/ui/confetti-button";

function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const sessionKey = "visitor_counted";
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    if (!alreadyCounted) {
      fetch("/api/visitors", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count);
          sessionStorage.setItem(sessionKey, "1");
        })
        .catch(() => {
          fetch("/api/visitors")
            .then((res) => res.json())
            .then((data) => setCount(data.count))
            .catch(() => setCount(null));
        });
    } else {
      fetch("/api/visitors")
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setCount(null));
    }
  }, []);

  return count;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return n.toLocaleString("en-US");
  return n.toLocaleString("en-US");
}

export function VisitorCounter({ className }: { className?: string }) {
  const visitorCount = useVisitorCount();

  return (
    <ConfettiButton
      options={{
        particleCount: 40,
        spread: 360,
        startVelocity: 15,
        gravity: 1.2,
        scalar: 0.75,
      }}
      className={
        className ||
        "flex items-center gap-1.5 rounded-full border border-edge bg-muted/60 px-2.5 py-1 backdrop-blur-sm cursor-pointer hover:bg-muted/80 active:scale-95 transition-all duration-200 outline-none select-none shrink-0"
      }
    >
      <Eye className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <span className="font-mono text-xs font-medium text-muted-foreground tabular-nums">
        {visitorCount !== null ? formatCount(visitorCount) : "—"}
      </span>
    </ConfettiButton>
  );
}
