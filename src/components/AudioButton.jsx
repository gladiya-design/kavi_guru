import React, { useState, useEffect } from "react";
import { Music, Volume2, VolumeX, Sparkles } from "lucide-react";
import { audioManager } from "../utils/audioManager";
import { scrapbookConfig } from "../data/scrapbookData";

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Subscribe to audio state
    const unsubscribe = audioManager.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    audioManager.toggleMusic();
    audioManager.playPaperSound();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2">
      {/* Tooltip feedback */}
      {showTooltip && (
        <div className="bg-[#2a241f] text-[#f5eedc] text-xs font-hand text-base px-3 py-1 rounded-full shadow-lg border border-[#524538] animate-fade-in">
          {isPlaying ? "Music Playing ♫" : "Music Paused"}
        </div>
      )}

      {/* Floating ♫ Button */}
      <button
        onClick={handleToggle}
        aria-label="Toggle background music"
        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border cursor-pointer ${
          isPlaying
            ? "bg-[#2d251e] text-[#f7f2e7] border-[#8a755d] scale-105"
            : "bg-[#fbf7ee] text-[#4a3f35] border-[#d4c3ae] hover:scale-105"
        }`}
        title={isPlaying ? "Mute music" : "Play music"}
      >
        {/* Animated equalizer waves when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-amber-500/40 animate-ping opacity-60 pointer-events-none" />
        )}

        <div className="flex items-center justify-center font-serif text-lg font-bold">
          {isPlaying ? (
            <span className="text-xl animate-pulse">♫</span>
          ) : (
            <VolumeX size={18} className="opacity-70" />
          )}
        </div>
      </button>
    </div>
  );
}
