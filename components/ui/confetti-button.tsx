"use client";

import React from "react";
import confetti from "canvas-confetti";

export interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options?: confetti.Options;
}

export const ConfettiButton: React.FC<ConfettiButtonProps> = ({
  options,
  children,
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    confetti({
      particleCount: 50,
      spread: 60,
      zIndex: 99999,
      ...options,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
        ...options?.origin,
      },
    });

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
