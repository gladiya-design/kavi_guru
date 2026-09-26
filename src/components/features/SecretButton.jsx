import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { X, Lock, EyeOff } from "lucide-react";

export default function SecretButton({ onSelectPhoto }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(0); // 0: closed, 1: "Why did you click it?", 2: revealed photo
  const photo = scrapbookConfig.photos.funniestSecret;

  const handleClick = () => {
    setIsOpen(true);
    setStage(1);
    audioManager.playPaperSound();

    setTimeout(() => {
      setStage(2);
      audioManager.playChimeSound();
    }, 1800);
  };

  const handleClose = () => {
    setIsOpen(false);
    setStage(0);
  };

  return (
    <>
      {/* Tiny unexpected crumpled note / wax seal button */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 left-6 z-40 bg-[#dfd2be] hover:bg-[#cbb89e] text-[#524436] hover:text-[#261f18] text-xs font-hand text-base px-3 py-1.5 rounded-sm border border-[#a8967f] shadow-md transition-all hover:scale-105 hover:-rotate-2 cursor-pointer flex items-center gap-1.5"
        title="Curiosity killed the cat... or did it?"
      >
        <EyeOff size={14} className="opacity-70" />
        <span>Don&apos;t click this. 🤫</span>
      </button>

      {/* Secret Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm bg-[#faf5ea] rounded-sm p-6 shadow-2xl border border-[#d6c4ac] text-center"
            >
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 p-1.5 text-[#7a6452] hover:text-[#241c16] transition-colors"
                aria-label="Close secret"
              >
                <X size={18} />
              </button>

              <div className="washi-tape top-[-12px] left-[50%] -translate-x-1/2 w-24" />

              {stage === 1 ? (
                <div className="py-12 space-y-3">
                  <div className="font-hand text-3xl text-[#a8501c] font-black">
                    Why did you click it? 🤨
                  </div>
                  <p className="font-serif italic text-sm text-[#735e4d]">
                    Didn&apos;t the sign say strictly forbidden?
                  </p>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="text-left font-serif text-sm text-[#544335] border-b border-[#dfd2be] pb-2">
                    <p className="font-hand text-xl text-[#a8501c] font-bold">
                      Okay... Since you&apos;re already here...
                    </p>
                  </div>

                  <div className="w-full flex justify-center py-2">
                    <Polaroid
                      src={photo.src}
                      caption={photo.caption}
                      tilt={-2}
                      tapeColor="dark"
                      badge="CONFIDENTIAL"
                      onClick={() => onSelectPhoto && onSelectPhoto("funniestSecret")}
                    />
                  </div>

                  <p className="font-hand text-2xl text-[#c24134] font-black italic">
                    &ldquo;This one stays between us.&rdquo;
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
