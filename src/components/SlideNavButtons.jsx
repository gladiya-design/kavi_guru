/**
 * SlideNavButtons.jsx
 *
 * Prev ↑ / Next ↓ buttons rendered on each slide.
 * On the last slide, "Next" is replaced by a "↻ Replay" button that calls goTo(0).
 * On the first slide, "Prev" is hidden.
 *
 * Positioned at the bottom-center of each slide so they don't collide with
 * the floating music player (bottom-right) or the dot nav (right side).
 */

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, RotateCcw } from "lucide-react";
import { TOTAL_SLIDES } from "../data/slideConfig";

export default function SlideNavButtons({ currentIndex, goNext, goPrev, goTo }) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === TOTAL_SLIDES - 1;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
      {/* Prev button — hidden on first slide */}
      {!isFirst && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={goPrev}
          aria-label="Previous slide"
          className="
            flex items-center gap-1.5 px-4 py-2 rounded-full
            bg-[#1F113D]/80 backdrop-blur-md border border-[#7C3AED]/30
            text-[#DDD6FE] text-xs font-mono tracking-wider
            hover:border-[#A78BFA]/60 hover:text-white
            transition-colors shadow-lg cursor-pointer
          "
        >
          <ArrowUp size={13} />
          Prev
        </motion.button>
      )}

      {/* Next or Replay */}
      {isLast ? (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => goTo(0)}
          aria-label="Replay from beginning"
          className="
            flex items-center gap-1.5 px-5 py-2 rounded-full
            bg-gradient-to-r from-[#7C3AED] to-[#5B21B6]
            text-white text-xs font-mono tracking-wider font-semibold
            shadow-[0_4px_20px_rgba(124,58,237,0.5)]
            hover:shadow-[0_6px_28px_rgba(124,58,237,0.7)]
            transition-shadow cursor-pointer
          "
        >
          <RotateCcw size={13} />
          Replay
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={goNext}
          aria-label="Next slide"
          className="
            flex items-center gap-1.5 px-4 py-2 rounded-full
            bg-[#1F113D]/80 backdrop-blur-md border border-[#7C3AED]/30
            text-[#DDD6FE] text-xs font-mono tracking-wider
            hover:border-[#A78BFA]/60 hover:text-white
            transition-colors shadow-lg cursor-pointer
          "
        >
          Next
          <ArrowDown size={13} />
        </motion.button>
      )}
    </div>
  );
}
