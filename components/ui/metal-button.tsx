"use client";

import * as React from "react";
import { MetalFx } from "metal-fx";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type MetalButtonProps = ButtonProps & {
  metalFxClassName?: string;
  metalFxStyle?: React.CSSProperties;
  metalVariant?: "button" | "circle";
  preset?: "chromatic" | "silver" | "gold";
  theme?: "auto" | "dark" | "light";
  strength?: number;
  paused?: boolean;
  borderRadius?: number;
  normalizeHostStyles?: boolean;
  disableGlow?: boolean;
  reflectionTargets?: React.ComponentPropsWithoutRef<typeof MetalFx>["reflectionTargets"];
  shaderScale?: number;
  ringCssPx?: number;
  scale?: number;
  buttonRef?: React.Ref<HTMLButtonElement>;
};

export type MetalIconButtonProps = MetalButtonProps;

export const MetalButton = React.forwardRef<HTMLDivElement, MetalButtonProps>(
  (
    {
      className,
      metalFxClassName,
      metalFxStyle,
      metalVariant = "button",
      preset = "chromatic",
      theme = "auto",
      strength = 0.9,
      paused = false,
      borderRadius,
      normalizeHostStyles = true,
      disableGlow = false,
      reflectionTargets,
      shaderScale,
      ringCssPx,
      scale = 1,
      variant = "outline",
      size,
      asChild,
      buttonRef,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const buttonElement = (
      <Button
        ref={buttonRef}
        className={className}
        variant={variant}
        size={size}
        asChild={asChild}
        {...buttonProps}
      >
        {children}
      </Button>
    );

    if (!mounted) {
      return (
        <div
          ref={ref}
          className={cn("inline-flex shrink-0", metalFxClassName)}
          style={metalFxStyle}
        >
          {buttonElement}
        </div>
      );
    }

    return (
      <MetalFx
        ref={ref}
        className={cn("inline-flex shrink-0", metalFxClassName)}
        style={metalFxStyle}
        variant={metalVariant}
        preset={preset}
        theme={theme}
        strength={strength}
        paused={paused}
        borderRadius={borderRadius}
        normalizeHostStyles={normalizeHostStyles}
        disableGlow={disableGlow}
        reflectionTargets={reflectionTargets}
        shaderScale={shaderScale}
        ringCssPx={ringCssPx}
        scale={scale}
      >
        {buttonElement}
      </MetalFx>
    );
  }
);
MetalButton.displayName = "MetalButton";

export const MetalIconButton = React.forwardRef<
  HTMLDivElement,
  MetalIconButtonProps
>(({ metalVariant = "circle", size = "icon", ...props }, ref) => {
  return (
    <MetalButton
      ref={ref}
      metalVariant={metalVariant}
      size={size}
      {...props}
    />
  );
});
MetalIconButton.displayName = "MetalIconButton";
