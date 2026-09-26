import React from "react";
import { motion } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Chapter6_FunMall({ onNext, onSelectPhoto }) {
  const { funMall1, funMall2, photo3 } = scrapbookConfig.photos;

  return (
    <div className="min-h-screen bg-[#faf5ea] text-[#2c221a] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a8744f] border-b border-[#a8744f]/40 pb-1">
          Chapter 06
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          The Reunion
        </h2>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-10">
        {/* Physical Calendar Tear-off Sheet Aesthetic */}
        <motion.div
          initial={{ rotate: -2, y: 15, opacity: 0 }}
          whileInView={{ rotate: -1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative bg-white border border-[#dfd2be] rounded-sm p-6 sm:p-8 shadow-xl max-w-md w-full text-center"
        >
          {/* Top binder holes */}
          <div className="absolute top-2 inset-x-0 flex justify-center gap-12 pointer-events-none">
            <div className="w-3.5 h-3.5 rounded-full bg-[#1c1815] shadow-inner" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#1c1815] shadow-inner" />
          </div>

          <div className="pt-4 border-b border-[#ece2d0] pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a34438] font-bold">
              Wednesday
            </span>
            <div className="font-serif text-5xl sm:text-6xl font-black text-[#261f19] tracking-tight mt-1">
              23 APRIL
            </div>
            <span className="font-hand text-2xl text-[#876e54] font-bold">2025</span>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-[#a85c32] font-serif font-bold text-xl sm:text-2xl">
            <MapPin size={22} className="text-[#c24134]" />
            <span>Fun Mall</span>
          </div>
        </motion.div>

        {/* Narrative */}
        <div className="text-center space-y-3 font-serif text-lg sm:text-2xl max-w-xl">
          <p className="italic text-[#705e4d]">After almost a year...</p>
          <p className="font-bold text-[#2b221a]">I finally met them.</p>
          <p className="font-hand text-3xl text-[#a85c32] font-bold">
            This was also the first time I met my machan.
          </p>
        </div>

        {/* 3 Polaroids with staggered angles and handwritten notes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl pt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Polaroid
              src={funMall1.src}
              caption={funMall1.caption}
              tilt={-4}
              tapeColor="olive"
              badge="MALL DAY"
              onClick={() => onSelectPhoto && onSelectPhoto("funMall1")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Polaroid
              src={funMall2.src}
              caption={funMall2.caption}
              tilt={3}
              tapeColor="rose"
              badge="TOGETHER"
              onClick={() => onSelectPhoto && onSelectPhoto("funMall2")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Polaroid
              src={photo3.src}
              caption={photo3.caption}
              tilt={-2}
              tapeColor="default"
              badge="FIRST MEETING"
              onClick={() => onSelectPhoto && onSelectPhoto("photo3")}
            />
          </motion.div>
        </div>

        {/* Closing cliffhanger */}
        <div className="pt-4 text-center space-y-2">
          <p className="font-serif italic text-xl text-[#786653]">
            At the time...
          </p>
          <p className="font-hand text-3xl sm:text-4xl text-[#241c16] font-bold">
            I didn&apos;t know what was about to happen.
          </p>
        </div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8c7a68] hover:text-[#2b221a] transition-colors group cursor-pointer"
        >
          <span>Keep going ↓</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
