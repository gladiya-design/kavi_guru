/**
 * App.jsx
 *
 * Root component. Architecture in slide-deck mode:
 *
 *   ┌──────────────────────────────────────────────────┐
 *   │  Fixed/Persistent Layer (z-40+, never remounts)  │
 *   │  • HeaderNav (progress bar + language switcher)  │
 *   │  • FloatingMusicPlayer                           │
 *   │  • SlideDotNav (dot stepper + X/N counter)       │
 *   │  • SlideNavButtons (Prev / Next / Replay)         │
 *   ├──────────────────────────────────────────────────┤
 *   │  Gate Layer (z-50)                               │
 *   │  • OpeningGiftModal (unmounts after user opens)  │
 *   ├──────────────────────────────────────────────────┤
 *   │  SlideDeck (0..12)                               │
 *   │  • AnimatePresence renders ONE section at a time │
 *   │  • All input (wheel/touch/key/btn) wired here    │
 *   └──────────────────────────────────────────────────┘
 *
 * Language: prop-drilled from App state down through the section render prop.
 * customPhotos: lifted to App so uploads survive slide transitions.
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { birthdayData } from "./data/birthdayData";
import { audioManager } from "./utils/audioManager";

// Persistent UI (never remount)
import FloatingMusicPlayer from "./components/FloatingMusicPlayer";
import LanguageSelector from "./components/LanguageSelector";
import SlideDotNav from "./components/SlideDotNav";
import SlideNavButtons from "./components/SlideNavButtons";

// Gate modal
import OpeningGiftModal from "./components/OpeningGiftModal";

// Slide deck shell
import SlideDeck from "./components/SlideDeck";

// All 13 section components
import BirthdayHero from "./components/sections/BirthdayHero";
import PersonalMessageSection from "./components/sections/PersonalMessageSection";
import HowDidWeGetHereSection from "./components/sections/HowDidWeGetHereSection";
import MemoryExperienceSection from "./components/sections/MemoryExperienceSection";
import FunnyQuestionsSection from "./components/sections/FunnyQuestionsSection";
import RapidFireSection from "./components/sections/RapidFireSection";
import ChooseNextMemorySection from "./components/sections/ChooseNextMemorySection";
import EmotionalTransitionSection from "./components/sections/EmotionalTransitionSection";
import HeartfeltWishSection from "./components/sections/HeartfeltWishSection";
import UntilNowSection from "./components/sections/UntilNowSection";
import MoreToComeSection from "./components/sections/MoreToComeSection";
import FinalSurpriseSection from "./components/sections/FinalSurpriseSection";
import FinalScreenSection from "./components/sections/FinalScreenSection";

// ─── Section render map ───────────────────────────────────────────────────────
// Maps SLIDE_CONFIG ids → component render functions.
// Receives { currentLang, customPhotos, onUploadPreview } as props.
function renderSection(slideId, props) {
  const { currentLang, customPhotos, onUploadPreview } = props;
  switch (slideId) {
    case "hero":
      return <BirthdayHero currentLang={currentLang} onBegin={() => {}} />;
    case "personal-message":
      return <PersonalMessageSection currentLang={currentLang} />;
    case "how-did-we-get-here":
      return <HowDidWeGetHereSection currentLang={currentLang} />;
    case "memories":
      return <MemoryExperienceSection currentLang={currentLang} />;
    case "funny-questions":
      return <FunnyQuestionsSection currentLang={currentLang} />;
    case "rapid-fire":
      return <RapidFireSection currentLang={currentLang} />;
    case "choose-next-memory":
      return <ChooseNextMemorySection currentLang={currentLang} />;
    case "emotional-transition":
      return <EmotionalTransitionSection currentLang={currentLang} />;
    case "heartfelt-wish":
      return <HeartfeltWishSection currentLang={currentLang} />;
    case "until-now":
      return (
        <UntilNowSection currentLang={currentLang} customPhotos={customPhotos} />
      );
    case "more-to-come":
      return <MoreToComeSection currentLang={currentLang} />;
    case "final-surprise":
      return <FinalSurpriseSection currentLang={currentLang} />;
    case "final-screen":
      return (
        <FinalScreenSection
          currentLang={currentLang}
          customPhotos={customPhotos}
        />
      );
    default:
      return null;
  }
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("tanglish");
  const [customPhotos, setCustomPhotos] = useState({});

  // Nav state surfaced from SlideDeck via callback (for persistent UI)
  const [currentIndex, setCurrentIndex] = useState(0);
  const navRef = useRef({ goTo: null, goNext: null, goPrev: null }); // stable nav API ref

  useEffect(() => {
    audioManager.init(birthdayData.music.src, birthdayData.music.defaultVolume);
  }, []);

  const handleUploadPreview = useCallback((id, url) => {
    setCustomPhotos((prev) => ({ ...prev, [id]: url }));
  }, []);

  // Called by SlideDeck whenever currentIndex changes
  const handleIndexChange = useCallback((index, goTo, goNext, goPrev) => {
    setCurrentIndex(index);
    navRef.current = { goTo, goNext, goPrev };
  }, []);

  const sectionProps = { currentLang, customPhotos, onUploadPreview: handleUploadPreview };

  return (
    <div
      className="relative bg-[#160B2E] text-white selection:bg-[#7C3AED] selection:text-white"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {/* ── Persistent floating UI ─────────────────────────────────────────── */}

      {/* Top slim progress bar + language pill — always visible */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        {/* Purple progress bar */}
        <div className="h-0.5 bg-[#160B2E]/50">
          <div
            className="h-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-white shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / 13) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Brand badge + language selector */}
      <header className="fixed top-3 inset-x-0 z-40 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F113D]/80 backdrop-blur-md border border-[#7C3AED]/30 text-white text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-ping" />
            <span className="font-semibold tracking-wider">MACHAN • SPECIAL</span>
          </div>
        </div>
        <div className="pointer-events-auto">
          <LanguageSelector currentLang={currentLang} onSelectLang={setCurrentLang} />
        </div>
      </header>

      {/* Floating music player — bottom-right, always mounted */}
      <FloatingMusicPlayer />

      {/* Dot stepper — right side */}
      {isOpen && (
        <SlideDotNav
          currentIndex={currentIndex}
          goTo={(i) => navRef.current.goTo?.(i)}
        />
      )}

      {/* Prev/Next/Replay buttons — bottom-center */}
      {isOpen && (
        <SlideNavButtons
          currentIndex={currentIndex}
          goNext={() => navRef.current.goNext?.()}
          goPrev={() => navRef.current.goPrev?.()}
          goTo={(i) => navRef.current.goTo?.(i)}
        />
      )}

      {/* ── Gate modal ────────────────────────────────────────────────────── */}
      {!isOpen && (
        <OpeningGiftModal
          currentLang={currentLang}
          onSelectLang={setCurrentLang}
          onOpenGift={() => setIsOpen(true)}
        />
      )}

      {/* ── Slide deck ────────────────────────────────────────────────────── */}
      {isOpen && (
        <SlideDeck onIndexChange={handleIndexChange}>
          {({ slide }) => renderSection(slide.id, sectionProps)}
        </SlideDeck>
      )}
    </div>
  );
}
