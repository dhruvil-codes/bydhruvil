import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BookingButtonProps {
  className?: string;
  href?: string;
}

export function BookingButton({
  className,
  href = "https://cal.com/bydhruvil/20min",
}: BookingButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium",
        "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",
        "dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
        "border border-edge transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      Book a 20-minute call
    </Link>
  );
}
