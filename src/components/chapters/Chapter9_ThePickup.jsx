import React from "react";
import { motion } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Car, Home, Building2, SmilePlus } from "lucide-react";

export default function Chapter9_ThePickup({ onNext, onSelectPhoto }) {
  const photo = scrapbookConfig.photos.trouble;

  return (
    <div className="min-h-screen bg-[#faf5ea] text-[#241c16] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8744f] border-b border-[#a8744f]/40 pb-1">
          Chapter 09
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black mt-2 tracking-tight uppercase">
          The First Pickup
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-10">
        <p className="font-serif text-xl sm:text-2xl text-center text-[#544335] max-w-lg">
          The first time my machan came to pick me up from my PG...
        </p>

        {/* Animated car movement: PG -> Akka's Home */}
        <div className="w-full bg-[#f3ebd9] border border-[#d6c7b0] rounded-2xl p-6 relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between relative px-4 sm:px-8 py-4">
            {/* Road dashed line */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-[#8c745d]" />

            {/* PG */}
            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#382f27] text-white flex items-center justify-center shadow-lg">
                <Building2 size={24} />
              </div>
              <span className="font-serif font-bold text-sm text-[#382f27] mt-2">My PG</span>
            </div>

            {/* Moving Car */}
            <motion.div
              animate={{
                x: [-40, 40, -40],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="z-20 bg-[#c24134] text-white p-3 rounded-full shadow-xl flex items-center justify-center"
            >
              <Car size={22} />
            </motion.div>

            {/* Akka's Home */}
            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#2e5939] text-white flex items-center justify-center shadow-lg">
                <Home size={24} />
              </div>
              <span className="font-serif font-bold text-sm text-[#2e5939] mt-2">Akka&apos;s Home</span>
            </div>
          </div>
        </div>

        {/* Cinematic Narrative */}
        <div className="text-center space-y-3 font-serif text-lg sm:text-2xl">
          <p className="italic text-[#756250]">And the day went exactly as expected.</p>
          <p className="font-hand text-4xl sm:text-5xl text-[#a8501c] font-black tracking-wide pt-2">
            Me + Machan = Trouble.
          </p>
        </div>

        {/* Comic Dialogue Strip */}
        <div className="w-full max-w-md bg-white border border-[#dfd2be] rounded-xl p-6 shadow-md space-y-4">
          <div className="flex flex-col items-start">
            <span className="text-xs font-mono font-bold text-[#b45309] uppercase tracking-wider mb-1">
              Akka:
            </span>
            <div className="bg-[#f7f2e8] text-[#2b221a] px-4 py-2.5 rounded-2xl rounded-tl-xs font-serif text-lg border border-[#e5d8c3]">
              &ldquo;What are you two doing?&rdquo; 🤨
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs font-mono font-bold text-[#3d5a80] uppercase tracking-wider mb-1">
              Me + Machan:
            </span>
            <div className="bg-[#2a221b] text-[#f7f3ea] px-4 py-2.5 rounded-2xl rounded-tr-xs font-hand text-2xl font-bold">
              &ldquo;Nothing.&rdquo; 😇😇
            </div>
          </div>

          <div className="text-center pt-2">
            <span className="font-hand text-2xl text-[#c24134] font-black italic">
              Definitely something.
            </span>
          </div>
        </div>

        {/* Trouble Polaroid */}
        <div className="w-64 sm:w-80 pt-4">
          <Polaroid
            src={photo.src}
            caption={photo.caption}
            tilt={-3}
            tapeColor="olive"
            badge="CHAOS UNLOCKED"
            onClick={() => onSelectPhoto && onSelectPhoto("trouble")}
          />
        </div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7765] hover:text-[#241c16] transition-colors group cursor-pointer"
        >
          <span>Turn the page →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
