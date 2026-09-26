/**
 * SlideDeck.jsx
 *
 * Full-viewport slide deck shell.
 *
 * Responsibilities:
 *   1. Locks body overflow so native scroll never happens.
 *   2. Wires all four input methods (wheel, touch, arrow keys, buttons)
 *      to useSlideNavigation — all share the same LOCK_MS debounce.
 *   3. Renders ONLY the current slide inside AnimatePresence so Framer Motion
 *      can animate the exit and enter of sections.
 *   4. For slides marked internalScroll=true, the inner container gets its own
 *      overflow-y: auto scroll. Wheel events inside that container are stopped
 *      from bubbling to the deck via stopPropagation on the container's wheel handler,
 *      BUT only when the container can still scroll in that direction — when it hits
 *      the top or bottom boundary, the event is allowed to bubble and trigger a slide change.
 *   5. FinalSurpriseSection's lightbox is a fixed overlay; wheel/keyboard are naturally
 *      trapped there (no deck-level special handling needed).
 */

import React, { useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSlideNavigation, { LOCK_MS } from "../hooks/useSlideNavigation";
import { SLIDE_CONFIG, TOTAL_SLIDES } from "../data/slideConfig";

// ─── Per-type transition variants ────────────────────────────────────────────
// custom prop = direction (1 or -1)

const fadeVariants = {
  initial: (dir) => ({ opacity: 0, scale: dir === 1 ? 1.02 : 0.98 }),
  animate: { opacity: 1, scale: 1 },
  exit: (dir) => ({ opacity: 0, scale: dir === 1 ? 0.98 : 1.02 }),
};

const slideUpVariants = {
  initial: (dir) => ({ opacity: 0, y: dir === 1 ? 40 : -40 }),
  animate: { opacity: 1, y: 0 },
  exit: (dir) => ({ opacity: 0, y: dir === 1 ? -40 : 40 }),
};

const TRANSITION = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1],
};

// ─── Reduced motion helper ────────────────────────────────────────────────────
function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

// ─── SlideDeck ────────────────────────────────────────────────────────────────

export default function SlideDeck({ children, onIndexChange }) {
  const { currentIndex, direction, goNext, goPrev, goTo } =
    useSlideNavigation(TOTAL_SLIDES);

  // Notify parent (App) of index changes so it can pass slide info down
  useEffect(() => {
    onIndexChange?.(currentIndex, goTo, goNext, goPrev);
  }, [currentIndex, onIndexChange, goTo, goNext, goPrev]);

  // The child renderer gets the nav API so section buttons can call it
  const currentSlide = SLIDE_CONFIG[currentIndex];

  // ─── Lock body scroll ─────────────────────────────────────────────────────
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ─── Wheel input ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e) => {
      // If the event was already stopped by the internal-scroll container, ignore
      if (e.defaultPrevented) return;
      e.preventDefault(); // prevent any native scroll
      if (e.deltaY > 0) goNext();
      else if (e.deltaY < 0) goPrev();
    };
    // passive:false is required to call preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev]);

  // ─── Touch / swipe input ──────────────────────────────────────────────────
  const touchStartY = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;
      if (Math.abs(delta) < 40) return; // ignore tiny flicks
      if (delta > 0) goNext();
      else goPrev();
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // ─── Keyboard input ───────────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e) => {
      // Don't hijack keys when user is typing in an input/textarea
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      )
        return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // ─── Choose variants based on slide config ────────────────────────────────
  const variants =
    currentSlide.transitionType === "slideUp" ? slideUpVariants : fadeVariants;

  // Use simpler cross-fade if user prefers reduced motion
  const activeVariants = prefersReducedMotion()
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : variants;

  return (
    <div
      style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          variants={activeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={TRANSITION}
          style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        >
          {/*
           * Render the current slide, wrapped in an InternalScrollContainer
           * if the slide has internalScroll=true.
           * Pass nav callbacks down so slides can render their own Next/Prev buttons.
           */}
          <SlideWrapper
            slide={currentSlide}
            goNext={goNext}
            goPrev={goPrev}
            goTo={goTo}
            currentIndex={currentIndex}
          >
            {/* children is a render-prop function: (slide, nav) => JSX */}
            {children({ slide: currentSlide, goNext, goPrev, goTo, currentIndex })}
          </SlideWrapper>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── SlideWrapper ─────────────────────────────────────────────────────────────
/**
 * For internalScroll slides: wraps content in a div that scrolls internally.
 * The wheel handler on this container checks if there is still scroll room;
 * if yes, it calls stopPropagation to prevent slide navigation.
 * When the boundary is reached, the event bubbles up and triggers a slide change.
 */
function SlideWrapper({ slide, children, goNext, goPrev }) {
  const containerRef = useRef(null);

  const handleContainerWheel = useCallback(
    (e) => {
      if (!slide.internalScroll) return;
      const el = containerRef.current;
      if (!el) return;

      const atTop = el.scrollTop <= 0;
      const atBottom =
        Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 2;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown && !atBottom) {
        // Container can still scroll down — trap the event here
        e.stopPropagation();
        return;
      }
      if (scrollingUp && !atTop) {
        // Container can still scroll up — trap
        e.stopPropagation();
        return;
      }
      // Hit boundary — allow bubbling so deck navigation fires
      // (deck wheel handler will receive it)
    },
    [slide.internalScroll]
  );

  if (!slide.internalScroll) {
    // Simple full-height non-scrolling wrapper
    return (
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onWheel={handleContainerWheel}
      style={{
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        // Custom scrollbar matching site palette
        scrollbarWidth: "thin",
        scrollbarColor: "#5B21B6 #160B2E",
      }}
    >
      {children}
    </div>
  );
}
