import React from "react";
import { motion } from "framer-motion";
import Polaroid from "../Polaroid";
import { scrapbookConfig } from "../../data/scrapbookData";
import { audioManager } from "../../utils/audioManager";
import { ArrowDown, Moon, Waves, SunMedium } from "lucide-react";

export default function Chapter10_OrdinaryDays({ onNext, onSelectPhoto }) {
  const { lake1, lake2, lake3 } = scrapbookConfig.photos;

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#2c221a] py-20 px-4 sm:px-8 flex flex-col items-center justify-center relative">
      {/* Chapter header */}
      <div className="text-center mb-10">
        <span className="font-hand text-xl uppercase tracking-widest text-[#8a725e] border-b border-[#8a725e]/40 pb-1">
          Chapter 10
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          &ldquo;The Ordinary Days&rdquo;
        </h2>
        <p className="text-xs font-mono uppercase tracking-wider text-[#968371] mt-2">
          The quiet sweetness of doing nothing at all
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-12">
        {/* Soft, gentle narration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-3 font-serif text-xl sm:text-2xl leading-relaxed max-w-lg text-[#3e3228]"
        >
          <div className="w-10 h-10 rounded-full bg-[#f0e6d5] text-[#7d6550] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Moon size={20} />
          </div>
          <p>I took a nap at akka&apos;s home.</p>
          <p className="italic text-[#7d6854]">Nothing special.</p>
          <p>But somehow...</p>
          <p className="font-hand text-3xl sm:text-4xl text-[#945f35] font-bold">
            I remember it.
          </p>
        </motion.div>

        {/* Lake Photos Collage */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-6 text-[#5b7582] font-hand text-2xl font-bold">
            <Waves size={22} />
            <span>Afternoons by the Lake</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Polaroid
                src={lake1.src}
                caption={lake1.caption}
                tilt={-3}
                tapeColor="olive"
                onClick={() => onSelectPhoto && onSelectPhoto("lake1")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Polaroid
                src={lake2.src}
                caption={lake2.caption}
                tilt={2}
                tapeColor="default"
                onClick={() => onSelectPhoto && onSelectPhoto("lake2")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Polaroid
                src={lake3.src}
                caption={lake3.caption}
                tilt={-2}
                tapeColor="rose"
                onClick={() => onSelectPhoto && onSelectPhoto("lake3")}
              />
            </motion.div>
          </div>
        </div>

        {/* Closing reflection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-4 space-y-2 border-t border-[#dfd2be] w-full max-w-md"
        >
          <p className="font-serif italic text-xl sm:text-2xl text-[#6b5847]">
            &ldquo;Just a normal day.&rdquo;
          </p>
          <p className="font-hand text-3xl sm:text-4xl text-[#2a221b] font-bold">
            That became a memory.
          </p>
        </motion.div>
      </div>

      {/* Turn Page prompt */}
      <div className="mt-16 flex flex-col items-center">
        <button
          onClick={() => {
            audioManager.playPaperSound();
            onNext();
          }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#8a7765] hover:text-[#2c221a] transition-colors group cursor-pointer"
        >
          <span>Keep going ↓</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
