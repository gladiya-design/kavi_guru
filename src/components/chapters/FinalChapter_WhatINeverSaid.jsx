import React from "react";
import { motion } from "framer-motion";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown } from "lucide-react";

export default function FinalChapter_WhatINeverSaid({ onNext, onSelectPhoto }) {
  const photo = scrapbookConfig.photos.finalPhoto;

  return (
    <div className="min-h-screen bg-[#110f0e] text-[#f2e9dc] py-24 px-4 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background favorite photo with subtle dark overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {photo.src ? (
          <img
            src={photo.src}
            alt="All three of us"
            className="w-full h-full object-cover filter blur-sm scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-[#110f0e] via-[#110f0e]/90 to-[#110f0e]" />
      </div>

      {/* Chapter header */}
      <div className="text-center mb-12 z-10">
        <span className="font-hand text-xl uppercase tracking-widest text-amber-500/70 border-b border-amber-500/20 pb-1">
          Final Chapter
        </span>
        <h2 className="font-serif text-3xl sm:text-6xl font-bold mt-3 text-white tracking-tight">
          &ldquo;What I Never Said Properly&rdquo;
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto z-10 space-y-10 font-serif text-lg sm:text-2xl leading-relaxed text-center text-[#ddd1be]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-4"
        >
          <p>I never planned this bond.</p>
          <p className="text-[#baa691]">
            I never imagined that my akka&apos;s husband would become someone I would become so attached to.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="space-y-2"
        >
          <p className="italic text-[#a89582]">But somewhere along the way...</p>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
            he became my machan.
          </p>
        </motion.div>

        {/* List of who he became */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="space-y-3 font-serif text-lg sm:text-xl text-[#cdc1af] max-w-md mx-auto pt-2"
        >
          <p>Someone I could talk to.</p>
          <p>Someone I could laugh with.</p>
          <p>Someone I could annoy akka with.</p>
          <p>Someone who waited for me.</p>
          <p className="text-amber-200 font-medium">Someone who became part of my favourite memories.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="pt-6 space-y-3"
        >
          <p className="italic text-[#9e8b77]">
            Maybe that&apos;s how some relationships work.
          </p>
          <p>They don&apos;t arrive with a big announcement.</p>
          <p className="font-hand text-3xl text-amber-300 font-bold">They just grow.</p>
        </motion.div>

        {/* Stepping stones */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-hand text-2xl text-amber-100/90 pt-4"
        >
          <span className="p-2 border border-white/10 rounded-sm">One conversation.</span>
          <span className="p-2 border border-white/10 rounded-sm">One laugh.</span>
          <span className="p-2 border border-white/10 rounded-sm">One pickup.</span>
          <span className="p-2 border border-white/10 rounded-sm">One ice cream.</span>
          <span className="p-2 border border-white/10 rounded-sm">One trip.</span>
          <span className="p-2 border border-white/10 rounded-sm">One photograph.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="pt-8 space-y-2"
        >
          <p className="text-sm font-mono text-[#8a7663] uppercase tracking-widest">
            And suddenly...
          </p>
          <p className="font-serif text-3xl sm:text-5xl font-black text-white">
            They mean everything.
          </p>
        </motion.div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-20 flex flex-col items-center z-10">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7562] hover:text-white transition-colors group cursor-pointer"
        >
          <span>Read our final letter →</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
