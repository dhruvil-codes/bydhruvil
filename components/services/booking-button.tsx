import React from "react";
import Link from "next/link";
import { MetalButton } from "@/components/ui/metal-button";
import { cn } from "@/lib/utils";

interface BookingButtonProps {
  className?: string;
  metalFxClassName?: string;
  href?: string;
  preset?: "chromatic" | "silver" | "gold";
}

export function BookingButton({
  className,
  metalFxClassName,
  href = "https://cal.com/bydhruvil/20min",
  preset = "chromatic",
}: BookingButtonProps) {
  return (
    <MetalButton
      asChild
      variant="outline"
      preset={preset}
      metalFxClassName={cn(
        "rounded-xl border border-neutral-200/80 dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-md transition-all active:scale-[0.98]",
        metalFxClassName
      )}
      className={cn(
        "rounded-xl px-5 py-2.5 text-sm font-semibold sm:font-medium text-neutral-900 dark:text-neutral-100 cursor-pointer transition-colors",
        className
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        Book a 20-minute call
      </Link>
    </MetalButton>
  );
}
