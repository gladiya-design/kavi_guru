import React, { useState } from "react";
import { List, Camera, ChevronLeft, ChevronRight, BookOpen, Volume2 } from "lucide-react";
import { audioManager } from "../utils/audioManager";

export default function NavigationControls({
  currentChapter,
  totalChapters,
  chapterTitles,
  onJumpToChapter,
  onOpenPhotoManager,
}) {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSelect = (idx) => {
    audioManager.playPaperSound();
    onJumpToChapter(idx);
    setShowDrawer(false);
  };

  return (
    <>
      {/* Subtle Bottom Navigation Indicator & Jump Controls */}
      <div className="fixed bottom-4 inset-x-0 z-40 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        {/* Left: Quick Chapter Jumper Button */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="bg-[#2a241f]/90 hover:bg-[#382f28] text-[#f7f2e7] text-xs font-mono px-3.5 py-2 rounded-full shadow-lg border border-[#524436] flex items-center gap-2 backdrop-blur-xs transition-transform hover:scale-105 cursor-pointer"
            title="View all chapters"
          >
            <List size={14} />
            <span className="hidden sm:inline">Chapter {currentChapter + 1} of {totalChapters}</span>
            <span className="sm:hidden">{currentChapter + 1}/{totalChapters}</span>
          </button>

          {/* Quick Prev Button */}
          {currentChapter > 0 && (
            <button
              onClick={() => {
                audioManager.playPaperSound();
                onJumpToChapter(currentChapter - 1);
              }}
              className="bg-[#2a241f]/80 hover:bg-[#382f28] text-[#f7f2e7] p-2 rounded-full shadow-md border border-[#524436] cursor-pointer"
              title="Previous chapter"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Quick Next Button */}
          {currentChapter < totalChapters - 1 && (
            <button
              onClick={() => {
                audioManager.playPaperSound();
                onJumpToChapter(currentChapter + 1);
              }}
              className="bg-[#2a241f]/80 hover:bg-[#382f28] text-[#f7f2e7] p-2 rounded-full shadow-md border border-[#524436] cursor-pointer"
              title="Next chapter"
            >
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Right: Photo Album / Customizer button */}
        <div className="pointer-events-auto">
          <button
            onClick={() => {
              audioManager.playPaperSound();
              onOpenPhotoManager();
            }}
            className="bg-[#2a241f]/90 hover:bg-[#382f28] text-amber-300 text-xs font-mono px-3.5 py-2 rounded-full shadow-lg border border-[#524436] flex items-center gap-2 backdrop-blur-xs transition-transform hover:scale-105 cursor-pointer"
            title="Open photo album & quick replacement"
          >
            <Camera size={14} />
            <span className="hidden sm:inline">Photos Album</span>
          </button>
        </div>
      </div>

      {/* Chapter Drawer Modal */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-[#faf5ea] rounded-sm p-6 shadow-2xl border border-[#d9c9b2] text-[#2c221a]">
            <div className="flex items-center justify-between border-b border-[#dfd2be] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-[#a8501c]" />
                <h3 className="font-serif font-bold text-lg">Scrapbook Chapters</h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-xs font-mono text-[#786450] hover:text-[#2c221a] cursor-pointer p-1"
              >
                Close ✕
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto space-y-1.5 pr-1">
              {chapterTitles.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-3 py-2 rounded text-sm font-serif transition-colors flex items-center justify-between cursor-pointer ${
                    currentChapter === idx
                      ? "bg-[#2d2219] text-[#f7f2e8] font-bold"
                      : "hover:bg-[#f0e4d2] text-[#3e3228]"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {title}
                  </span>
                  {currentChapter === idx && (
                    <span className="text-[10px] font-mono text-amber-300 ml-2 uppercase">Current</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
