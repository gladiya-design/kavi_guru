import React from "react";
import { motion } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Mountain, Compass, MapPin } from "lucide-react";

export default function Chapter14_Marudhamalai({ onNext, onSelectPhoto }) {
  const { marudhamalai1, marudhamalai2, marudhamalai3, marudhamalai4 } = scrapbookConfig.photos;

  return (
    <div className="min-h-screen bg-[#faf5ea] text-[#241c16] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-8">
        <span className="font-hand text-xl uppercase tracking-widest text-[#a85c32] border-b border-[#a85c32]/40 pb-1">
          Chapter 14
        </span>
        <h2 className="font-serif text-5xl sm:text-7xl font-black mt-2 tracking-tight text-[#221a14]">
          14 JULY
        </h2>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-10">
        {/* Trio Rollcall & Destination */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-serif text-xl sm:text-3xl font-bold text-[#45362a]">
          <span className="bg-[#f0e6d5] px-4 py-1.5 rounded-full shadow-sm">Me.</span>
          <span className="bg-[#f0e6d5] px-4 py-1.5 rounded-full shadow-sm">My akka.</span>
          <span className="bg-[#f0e6d5] px-4 py-1.5 rounded-full shadow-sm">My machan.</span>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-3xl sm:text-5xl font-serif font-black text-[#a8501c]"
        >
          <Mountain size={36} className="text-[#a8501c]" />
          <span>Marudhamalai</span>
        </motion.div>

        {/* Animated Hill Road Route */}
        <div className="w-full max-w-md bg-[#f3ebd9] border border-[#d8cabb] rounded-xl p-4 text-center font-mono text-xs text-[#705e4d] flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Compass size={14} /> Coimbatore Base
          </span>
          <span className="font-bold text-[#b45309]">〜〜〜 Winding Hills 〜〜〜</span>
          <span className="flex items-center gap-1 text-[#b45309] font-bold">
            <MapPin size={14} /> Hilltop Temple
          </span>
        </div>

        {/* Photographs placed onto scrapbook page with physical dropping animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-4">
          <motion.div
            initial={{ opacity: 0, y: -40, rotate: -15 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <Polaroid
              src={marudhamalai1.src}
              caption={marudhamalai1.caption}
              tilt={-4}
              tapeColor="olive"
              badge="STEP 1"
              onClick={() => onSelectPhoto && onSelectPhoto("marudhamalai1")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40, rotate: 15 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <Polaroid
              src={marudhamalai2.src}
              caption={marudhamalai2.caption}
              tilt={5}
              tapeColor="rose"
              badge="HILLTOP"
              onClick={() => onSelectPhoto && onSelectPhoto("marudhamalai2")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <Polaroid
              src={marudhamalai3.src}
              caption={marudhamalai3.caption}
              tilt={-2}
              tapeColor="default"
              badge="THE TRIO"
              onClick={() => onSelectPhoto && onSelectPhoto("marudhamalai3")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40, rotate: 12 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <Polaroid
              src={marudhamalai4.src}
              caption={marudhamalai4.caption}
              tilt={3}
              tapeColor="dark"
              badge="MEMORIES"
              onClick={() => onSelectPhoto && onSelectPhoto("marudhamalai4")}
            />
          </motion.div>
        </div>

        {/* Closing takeaway */}
        <div className="text-center pt-6 space-y-2 border-t border-[#ded1be] w-full max-w-lg">
          <p className="font-serif italic text-2xl text-[#63503f]">
            &ldquo;Our first little trip together.&rdquo;
          </p>
          <p className="font-hand text-4xl sm:text-5xl text-[#a8501c] font-black">
            Small trip. Big memory.
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
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-[#241c16] transition-colors group cursor-pointer"
        >
          <span>Turn the page →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
