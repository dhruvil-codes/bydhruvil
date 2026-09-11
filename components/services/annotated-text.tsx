import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function RoughFilters() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="hd-rough" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.045}
            numOctaves={2}
            seed={4}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={2.6}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="hd-rough-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.035}
            numOctaves={2}
            seed={11}
            result="n2"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n2"
            scale={1.5}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

function WavyDecoration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2,6 Q5.5,3 9,6 T17,6 T25,6 T33,6 T41,6 T49,6 T57,6 T65,6 T73,6 T81,6 T89,6 T97,6 T105,6 T113,6 T121,6 T129,6 T137,6"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        fill="none"
        filter="url(#hd-rough-soft)"
      />
    </svg>
  );
}

function CircleDecoration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 64"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M40,40 C20,23 53,7 102,5 C153,3 207,11 211,29 C215,47 167,60 109,60 C59,60 15,53 19,35 C21,27 27,22 37,20"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        filter="url(#hd-rough)"
      />
      <path
        d="M43,37 C28,25 58,9 105,7 C151,6 199,14 206,29 C212,45 167,57 110,58"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
        opacity={0.55}
        filter="url(#hd-rough-soft)"
      />
    </svg>
  );
}

function HighlightDecoration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 170 26"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4,17 C2,11 5,7 12,6 C45,2 95,2 138,4 C152,5 164,7 166,13 C167,18 163,21 155,22 C112,24 60,24 16,22 C8,21.5 4,20 4,17 Z"
        fill="currentColor"
        filter="url(#hd-rough-soft)"
      />
    </svg>
  );
}

function UnderlineDecoration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 10"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3,6 C40,3 100,3 137,5"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        fill="none"
        filter="url(#hd-rough-soft)"
      />
    </svg>
  );
}

function LineDecoration({ className }: Readonly<{ className?: string }>) {
  return (
    <span
      aria-hidden="true"
      className={cn("block rounded-full bg-current", className)}
    />
  );
}

function DottedUnderlineDecoration({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.5px)]",
        "bg-size-[0.5em_100%] bg-position-[0_100%] bg-repeat-x",
        className
      )}
    />
  );
}

function DoubleUnderlineDecoration({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3,5 C40,2 100,2 137,4"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        fill="none"
        filter="url(#hd-rough-soft)"
      />
      <path
        d="M5,12 C42,9 98,10 135,11"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        fill="none"
        opacity={0.75}
        filter="url(#hd-rough-soft)"
      />
    </svg>
  );
}

function BoxDecoration({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 64"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M12,10 C60,6 140,6 188,10 C193,26 193,40 188,54 C140,58 60,58 12,54 C7,40 7,26 12,10 Z"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#hd-rough)"
      />
    </svg>
  );
}

const annotationStyles = {
  wavy: {
    wrapper: "relative inline-block whitespace-nowrap",
    Decoration: WavyDecoration,
    decorationClassName:
      "pointer-events-none absolute bottom-[-0.3em] left-[-2%] h-[0.55em] w-[104%]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
  circle: {
    wrapper: "relative inline-block px-1 whitespace-nowrap",
    Decoration: CircleDecoration,
    decorationClassName:
      "pointer-events-none absolute inset-[-0.5em_-0.45em] h-[calc(100%+1em)] w-[calc(100%+0.9em)]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
  highlight: {
    wrapper: "relative inline-block whitespace-nowrap",
    Decoration: HighlightDecoration,
    decorationClassName:
      "pointer-events-none absolute inset-x-[-3%] bottom-[-0.05em] z-0 h-[1.1em] w-[106%]",
    defaultColor: "text-pink-200/60 dark:text-yellow-400/20",
  },
  underline: {
    wrapper: "relative inline-block whitespace-nowrap",
    Decoration: UnderlineDecoration,
    decorationClassName:
      "pointer-events-none absolute bottom-[-0.25em] left-[-1%] h-[0.45em] w-[102%]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
  line: {
    wrapper: "relative inline-block whitespace-nowrap",
    Decoration: LineDecoration,
    decorationClassName:
      "pointer-events-none absolute bottom-[-0.15em] left-[-1%] block h-[1.5px] w-[102%]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
  dottedUnderline: {
    wrapper: "relative inline-block whitespace-nowrap",
    Decoration: DottedUnderlineDecoration,
    decorationClassName:
      "pointer-events-none absolute bottom-[-0.28em] left-[-1%] block h-[0.45em] w-[102%]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
  doubleUnderline: {
    wrapper: "relative inline-block whitespace-nowrap",
    Decoration: DoubleUnderlineDecoration,
    decorationClassName:
      "pointer-events-none absolute bottom-[-0.4em] left-[-1%] h-[0.6em] w-[102%]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
  box: {
    wrapper: "relative inline-block px-[0.35em] whitespace-nowrap",
    Decoration: BoxDecoration,
    decorationClassName:
      "pointer-events-none absolute inset-[-0.3em_-0.35em] h-[calc(100%+0.6em)] w-[calc(100%+0.7em)]",
    defaultColor: "text-pink-500 dark:text-yellow-400",
  },
} as const;

export type AnnotationVariant = keyof typeof annotationStyles;

interface AnnotatedTextProps {
  children: ReactNode;
  variant?: AnnotationVariant;
  color?: string;
  className?: string;
}

export const AnnotatedText = forwardRef<HTMLSpanElement, AnnotatedTextProps>(
  ({ children, variant = "wavy", color, className }, ref) => {
    const style = annotationStyles[variant];
    const Decoration = style.Decoration;
    const decorationClass = cn(
      style.decorationClassName,
      color ?? style.defaultColor
    );

    const isBehindText = variant === "highlight";

    if (isBehindText) {
      return (
        <>
          <RoughFilters />
          <span ref={ref} className={cn(style.wrapper, className)}>
            <span className="relative z-10 font-medium text-foreground">
              {children}
            </span>
            <Decoration className={cn(decorationClass, "z-0")} />
          </span>
        </>
      );
    }

    return (
      <>
        <RoughFilters />
        <span
          ref={ref}
          className={cn(style.wrapper, "font-medium text-foreground", className)}
        >
          {children}
          <Decoration className={decorationClass} />
        </span>
      </>
    );
  }
);

AnnotatedText.displayName = "AnnotatedText";
