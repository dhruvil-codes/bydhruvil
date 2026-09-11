"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ProjectCard = {
  src: string;
  title: string;
  category?: string;
  problem: string;
  solution: string;
};

const projectCards: ProjectCard[] = [
  {
    title: "Support Agent for D2C",
    category: "Demo build",
    src: "/images/projects/clarity/clarity.jpg",
    problem:
      "Customers asked the same three order and return questions repeatedly every day.",
    solution:
      "Built an agent that answers directly from store documentation and routes conversations to human staff when confidence drops.",
  },
  {
    title: "Ops Automation",
    category: "Demo build",
    src: "/images/projects/nudge/nudge.png",
    problem:
      "Staff spent two hours every morning re-typing order emails into a tracking spreadsheet.",
    solution:
      "Built a background pipeline inside Google Workspace that logs incoming records, sends a daily summary digest, and alerts immediately if an entry fails.",
  },
  {
    title: "Internal Doc Bot",
    category: "Demo build",
    src: "/images/projects/minutz/minutz.jpg",
    problem:
      "Staff repeatedly asked questions in Slack that were already answered in internal documentation.",
    solution:
      "Built an internal Slack bot that answers questions from existing markdown files and cites the exact source file with every response.",
  },
];

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export function ProjectsCarousel({
  autoplay = false,
  autoplaySpeed = 0.5,
}: {
  autoplay?: boolean;
  autoplaySpeed?: number;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!autoplay || isHovered) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += autoplaySpeed;
        const scrollWidth = carouselRef.current.scrollWidth;

        if (carouselRef.current.scrollLeft >= scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }

        checkScrollability();
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoplay, autoplaySpeed, isHovered]);

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 260 : 320;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 260 : 320;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 260 : 320;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeftState(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  // Duplicate items for loop
  const allCards = [...projectCards, ...projectCards];

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div
        className="relative w-full mx-auto"
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:none cursor-grab active:cursor-grabbing",
            isDragging && "cursor-grabbing scroll-auto"
          )}
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex flex-row justify-start gap-4">
            {allCards.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * (index % projectCards.length),
                  ease: "easeOut",
                }}
                key={`project-card-${index}`}
                className="rounded-2xl shrink-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative z-10 flex h-[340px] w-64 flex-col items-start justify-end overflow-hidden rounded-2xl border border-edge bg-neutral-100 md:h-[380px] md:w-80 dark:bg-neutral-900">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-3/4 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="relative z-40 p-6 w-full text-left">
                    {card.category && (
                      <p className="font-mono text-xs font-medium text-neutral-300 uppercase tracking-wider">
                        {card.category}
                      </p>
                    )}
                    <p className="mt-1 max-w-xs font-mono text-lg font-semibold [text-wrap:balance] text-white md:text-xl">
                      {card.title}
                    </p>
                    <div className="mt-2.5 text-[13px] leading-relaxed space-y-1.5">
                      <p className="text-neutral-300">{card.problem}</p>
                      <p className="text-white font-medium">{card.solution}</p>
                    </div>
                  </div>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="absolute inset-0 z-10 w-full h-full object-cover grayscale opacity-35 dark:opacity-25"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button
            type="button"
            className="relative z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background border border-edge hover:bg-muted disabled:opacity-40 transition-colors cursor-pointer"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll carousel left"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            type="button"
            className="relative z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background border border-edge hover:bg-muted disabled:opacity-40 transition-colors cursor-pointer"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll carousel right"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export default ProjectsCarousel;
