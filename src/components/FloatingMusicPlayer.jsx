import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music2, Sparkles } from "lucide-react";
import { audioManager } from "../utils/audioManager";
import { birthdayData } from "../data/birthdayData";

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.6);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const unsub = audioManager.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });
    return () => unsub();
  }, []);

  const handleTogglePlay = () => {
    audioManager.toggleMusic();
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolumeState(newVol);
    audioManager.setVolume(newVol);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Floating Glassmorphism Player Pill */}
      <div className="flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#1F113D]/85 backdrop-blur-xl border border-[#7C3AED]/35 shadow-[0_8px_30px_rgb(0,0,0,0.45)] purple-glow-border transition-all duration-300">
        {/* Animated equalizer waves / music badge */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#7C3AED]/20 text-[#A78BFA]">
          {isPlaying ? (
            <div className="flex items-end justify-center gap-0.5 h-3.5">
              <span className="w-0.5 bg-[#A78BFA] h-full animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-[#DDD6FE] h-2/3 animate-[pulse_1.1s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-[#7C3AED] h-full animate-[pulse_0.7s_ease-in-out_infinite]" />
            </div>
          ) : (
            <Music2 size={15} className="opacity-70" />
          )}
        </div>

        {/* Title & Status */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-semibold text-white tracking-wide truncate max-w-[130px]">
            {birthdayData.music.title}
          </span>
          <span className="text-[9px] text-[#A78BFA] tracking-wider uppercase font-mono">
            {isPlaying ? "Playing ♫" : "Paused"}
          </span>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#8B5CF6] hover:to-[#6D28D9] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          title={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>

        {/* Volume Toggle & Slider */}
        <div className="relative flex items-center">
          <button
            onClick={() => setShowVolume(!showVolume)}
            className="p-1.5 text-[#DDD6FE]/70 hover:text-white transition-colors cursor-pointer"
            title="Adjust volume"
          >
            {volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {showVolume && (
            <div className="absolute bottom-11 right-0 p-3 bg-[#1F113D]/95 backdrop-blur-xl border border-[#7C3AED]/40 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-[#7C3AED] h-1.5 bg-[#160B2E] rounded-lg cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
