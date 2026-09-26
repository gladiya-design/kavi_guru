/**
 * slideConfig.js
 *
 * Ordered registry of all 13 slides.
 * Each entry describes:
 *   - id          unique key (also used as React key)
 *   - label       shown in dot stepper tooltip
 *   - transitionType  "fade" | "slideUp" — controls Framer Motion variant
 *   - internalScroll  true → section has its own vertically scrollable inner container;
 *                     the SlideDeck MUST trap wheel/touch events so they don't trigger
 *                     slide navigation while the user is scrolling content inside.
 *   - component   lazy string handled by SlideDeck (to avoid circular imports)
 */

export const SLIDE_CONFIG = [
  {
    id: "hero",
    label: "Birthday Hero",
    transitionType: "fade",
    internalScroll: false,
  },
  {
    id: "personal-message",
    label: "Personal Message",
    transitionType: "fade",
    internalScroll: true, // long letter on small screens
  },
  {
    id: "how-did-we-get-here",
    label: "How We Got Here",
    transitionType: "slideUp",
    internalScroll: false,
  },
  {
    id: "memories",
    label: "Memory Gallery",
    transitionType: "fade",
    internalScroll: true, // 8-photo grid
  },
  {
    id: "funny-questions",
    label: "Comedy Quiz",
    transitionType: "slideUp",
    internalScroll: false, // single question card; no scroll needed
  },
  {
    id: "rapid-fire",
    label: "Rapid Fire",
    transitionType: "slideUp",
    internalScroll: true, // 7 pairs may overflow on mobile
  },
  {
    id: "choose-next-memory",
    label: "Choose Next Memory",
    transitionType: "slideUp",
    internalScroll: false,
  },
  {
    id: "emotional-transition",
    label: "One Last Truth",
    transitionType: "fade",
    internalScroll: true, // 12 lines poem
  },
  {
    id: "heartfelt-wish",
    label: "Birthday Wish",
    transitionType: "fade",
    internalScroll: true, // multi-paragraph letter
  },
  {
    id: "until-now",
    label: "Until Now",
    transitionType: "fade",
    internalScroll: true, // photo montage grid
  },
  {
    id: "more-to-come",
    label: "More To Come",
    transitionType: "fade",
    internalScroll: true, // future card grid
  },
  {
    id: "final-surprise",
    label: "Final Surprise",
    transitionType: "fade",
    internalScroll: false,
  },
  {
    id: "final-screen",
    label: "To Be Continued",
    transitionType: "fade",
    internalScroll: false,
  },
];

export const TOTAL_SLIDES = SLIDE_CONFIG.length;
