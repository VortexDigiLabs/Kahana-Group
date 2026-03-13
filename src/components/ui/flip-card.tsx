"use client";

import React, { useState, useRef } from "react";
import { cn } from "../../lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

export function FlipCard({ front, back, className, frontClassName, backClassName }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [transform, setTransform] = useState("");
  const [transition, setTransition] = useState("transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)");
  const cardRef = useRef<HTMLDivElement>(null);

  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  const handleClick = () => {
    const baseRotate = isFlipped ? 0 : 180;
    setTransition("transform 0.15s ease-out");
    setTransform(`rotateY(${baseRotate}deg) scale(1.05)`);

    setTimeout(() => {
      setTransition("transform 0.7s cubic-bezier(.4,.2,.2,1)");
      setTransform(`rotateY(${baseRotate}deg) scale(1)`);
      setIsFlipped(!isFlipped);
    }, 150);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    const baseRotate = isFlipped ? 180 : 0;
    setTransform(`rotateY(${baseRotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    const baseRotate = isFlipped ? 180 : 0;
    setTransform(`rotateY(${baseRotate}deg) rotateX(0deg) rotateY(0deg) scale(1)`);
  };

  return (
    <div
      className={cn("perspective-1000 cursor-pointer relative group", className)}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className={cn(
          "relative w-full h-full min-h-[360px] rounded-2xl preserve-3d",
        )}
        style={{ transform, transition }}
      >
        {/* Front */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl backface-hidden flex flex-col justify-between p-6 overflow-hidden",
            "bg-white border border-slate-200 shadow-sm",
            "before:absolute before:inset-0 before:rounded-2xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-400 group-hover:before:animate-card-pulse before:pointer-events-none before:z-20",
            isFlipped && "before:opacity-100 before:animate-card-pulse",
            frontClassName
          )}
          style={{
            transform: "rotateY(0deg)",
          }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl backface-hidden flex flex-col justify-between p-6 overflow-hidden",
            "bg-white border border-slate-200 shadow-sm",
            "before:absolute before:inset-0 before:rounded-2xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-400 group-hover:before:animate-card-pulse before:pointer-events-none before:z-20",
            isFlipped && "before:opacity-100 before:animate-card-pulse",
            backClassName
          )}
          style={{
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
