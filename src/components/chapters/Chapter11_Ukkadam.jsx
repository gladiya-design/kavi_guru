import React from "react";
import { motion } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Bus, Moon, Car, Clock } from "lucide-react";

export default function Chapter11_Ukkadam({ onNext, onSelectPhoto }) {
  const photo = scrapbookConfig.photos.ukkadam;

  return (
    <div className="min-h-screen bg-[#151312] text-[#f2e9dc] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-amber-500/80 border-b border-amber-500/30 pb-1">
          Chapter 11
        </span>
        <h2 className="font-serif text-5xl sm:text-7xl font-black mt-2 tracking-tight text-[#faf5ea]">
          10 JULY
        </h2>
        <div className="flex items-center justify-center gap-2 text-sm font-mono text-[#a6927d] mt-2">
          <Moon size={16} className="text-amber-300" />
          <span>Nightfall Arrival</span>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-10">
        {/* Night Story Lines */}
        <div className="text-center space-y-3 font-serif text-xl sm:text-2xl leading-relaxed text-[#ddd1bf]">
          <p>I travelled to Ukkadam Bus Stand.</p>
          <p className="italic text-[#9e8b78]">It was night.</p>
          <p className="font-serif font-bold text-2xl sm:text-3xl text-amber-200">
            And my machan was waiting for me.
          </p>
        </div>

        {/* Animated Night Bus & Waiting Route */}
        <div className="w-full bg-[#201c1a] border border-[#42372e] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-[#8a7663] border-b border-[#362b22] pb-2">
            <span>BUS ROUTE: NIGHT SERVICE</span>
            <span>UKKADAM STAND</span>
          </div>

          <div className="py-6 flex items-center justify-between relative px-4">
            {/* Dark Highway Trail */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-t border-dashed border-[#574636]" />

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#2e2621] text-amber-400 flex items-center justify-center border border-[#524133]">
                <Bus size={24} />
              </div>
              <span className="font-mono text-xs text-[#a6927d] mt-2">Night Bus</span>
            </div>

            {/* Glowing route line */}
            <motion.div
              animate={{ x: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="z-10 text-amber-400/90 text-xs font-mono bg-black/40 px-3 py-1 rounded-full border border-amber-500/30"
            >
              Arriving...
            </motion.div>

            <div className="z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-900/40 text-amber-300 flex items-center justify-center border border-amber-500/40 shadow-lg shadow-amber-900/20">
                <Car size={24} />
              </div>
              <span className="font-mono text-xs text-amber-300 font-bold mt-2">Machan Waiting</span>
            </div>
          </div>
        </div>

        {/* The Reveal */}
        <div className="text-center space-y-2">
          <p className="font-hand text-3xl sm:text-4xl text-amber-300 font-bold">
            He picked me up.
          </p>
        </div>

        {/* Ukkadam Polaroid */}
        <div className="w-64 sm:w-80">
          <Polaroid
            src={photo.src}
            caption={photo.caption}
            tilt={2}
            tapeColor="dark"
            badge="10 PM PICKUP"
            onClick={() => onSelectPhoto && onSelectPhoto("ukkadam")}
          />
        </div>

        {/* Closing bridge to week */}
        <p className="font-serif italic text-xl sm:text-2xl text-center text-[#d6c7b2]">
          And that&apos;s how my week with them began.
        </p>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-amber-200 transition-colors group cursor-pointer"
        >
          <span>Turn the page →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
