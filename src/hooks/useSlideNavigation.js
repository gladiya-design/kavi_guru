/**
 * useSlideNavigation.js
 *
 * Manages full-screen slide deck navigation:
 *   - currentIndex (0..N-1)
 *   - direction (1 = forward, -1 = backward) for Framer Motion variants
 *   - goNext / goPrev / goTo(n) exposed to callers
 *
 * Input methods wired externally (in SlideDeck) so this hook is pure state logic.
 * The LOCK_MS debounce prevents double-jumps from fast wheel/swipe/key bursts.
 */

import { useState, useRef, useCallback } from "react";

export const LOCK_MS = 750; // one gesture = one slide change

export default function useSlideNavigation(total) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  // Ref-based lock so stale closures in event listeners always see the latest value
  const lockedRef = useRef(false);

  const lock = useCallback(() => {
    lockedRef.current = true;
    setTimeout(() => {
      lockedRef.current = false;
    }, LOCK_MS);
  }, []);

  const goNext = useCallback(() => {
    if (lockedRef.current) return;
    setCurrentIndex((prev) => {
      if (prev >= total - 1) return prev; // already at last slide
      lock();
      setDirection(1);
      return prev + 1;
    });
  }, [total, lock]);

  const goPrev = useCallback(() => {
    if (lockedRef.current) return;
    setCurrentIndex((prev) => {
      if (prev <= 0) return prev; // already at first slide
      lock();
      setDirection(-1);
      return prev - 1;
    });
  }, [lock]);

  const goTo = useCallback(
    (index) => {
      if (lockedRef.current) return;
      if (index < 0 || index >= total) return;
      setCurrentIndex((prev) => {
        lock();
        setDirection(index >= prev ? 1 : -1);
        return index;
      });
    },
    [total, lock]
  );

  return { currentIndex, direction, goNext, goPrev, goTo };
}
