import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { Sparkles } from "lucide-react";

export default function HeaderNav({ currentLang, onSelectLang }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Subtle Glowing Purple Progress Bar at Very Top */}
      <div className="fixed top-0 inset-x-0 h-1 z-50 bg-[#160B2E]/50">
        <div
          className="h-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-white shadow-[0_0_12px_rgba(124,58,237,0.8)] transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating Header */}
      <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        {/* Left: Minimal Brand Badge */}
        <div className="pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F113D]/80 backdrop-blur-md border border-[#7C3AED]/30 text-white text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-ping" />
            <span className="font-semibold tracking-wider">MACHAN • SPECIAL</span>
          </div>
        </div>

        {/* Right: Modern Segmented Language Selector */}
        <div className="pointer-events-auto">
          <LanguageSelector currentLang={currentLang} onSelectLang={onSelectLang} />
        </div>
      </header>
    </>
  );
}
