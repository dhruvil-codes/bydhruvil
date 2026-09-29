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
      metalFxClassName={cn("rounded-xl", metalFxClassName)}
      className={cn(
        "rounded-xl px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors",
        className
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        Book a 20-minute call
      </Link>
    </MetalButton>
  );
}
