/**
 * SlideDotNav.jsx
 *
 * Persistent dot stepper + "X / 13" counter.
 * Mounted OUTSIDE SlideDeck so it never remounts.
 * Dots are clickable — calls goTo(index) directly.
 */

import React from "react";
import { motion } from "framer-motion";
import { SLIDE_CONFIG, TOTAL_SLIDES } from "../data/slideConfig";

export default function SlideDotNav({ currentIndex, goTo }) {
  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2"
      aria-label="Slide navigation"
    >
      {/* X / N counter */}
      <span className="text-[10px] font-mono text-[#A78BFA]/70 tracking-wider mb-1 select-none">
        {currentIndex + 1}/{TOTAL_SLIDES}
      </span>

      {/* Dot per slide */}
      {SLIDE_CONFIG.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <button
            key={slide.id}
            onClick={() => goTo(idx)}
            title={slide.label}
            aria-label={`Go to slide: ${slide.label}`}
            className="group relative flex items-center justify-center w-5 h-5 cursor-pointer"
          >
            <motion.span
              animate={{
                width: isActive ? 8 : 5,
                height: isActive ? 8 : 5,
                backgroundColor: isActive ? "#A78BFA" : "rgba(167,139,250,0.35)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ borderRadius: "50%", display: "block" }}
            />
            {/* Tooltip label on hover */}
            <span
              className="
                pointer-events-none absolute right-7 whitespace-nowrap
                px-2 py-0.5 rounded-md text-[10px] font-mono tracking-wide
                bg-[#1F113D]/90 text-[#DDD6FE] border border-[#7C3AED]/30
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
              "
            >
              {slide.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
