import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Smile, Flame, Camera, Heart } from "lucide-react";
import { birthdayData } from "../../data/birthdayData";

export default function HowDidWeGetHereSection({ currentLang }) {
  const content = birthdayData.howItHappened[currentLang];

  const icons = [
    <Sparkles size={18} key="1" className="text-[#A78BFA]" />,
    <MessageCircle size={18} key="2" className="text-[#A78BFA]" />,
    <Smile size={18} key="3" className="text-[#A78BFA]" />,
    <Flame size={18} key="4" className="text-[#F43F5E]" />,
    <Camera size={18} key="5" className="text-[#A78BFA]" />,
    <Sparkles size={18} key="6" className="text-[#A78BFA]" />,
    <Heart size={20} key="7" className="text-[#F43F5E]" />,
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-8 relative bg-gradient-to-b from-[#160B2E] via-[#1F113D] to-[#160B2E] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#5B21B6]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-mono uppercase tracking-widest mb-3">
            <span>{content.subheading}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white purple-glow-text">
            {content.heading}
          </h2>
        </div>

        {/* Floating Steps List */}
        <div className="w-full space-y-4">
          {content.steps.map((step, idx) => {
            const isLast = idx === content.steps.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                  isLast
                    ? "glass-card-dark border-[#A78BFA]/50 bg-gradient-to-r from-[#7C3AED]/30 to-[#5B21B6]/30 shadow-xl purple-glow"
                    : "glass-card-dark border-[#7C3AED]/20 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isLast ? "bg-[#7C3AED] text-white" : "bg-[#7C3AED]/20 text-[#A78BFA]"
                  }`}
                >
                  {icons[idx] || <Sparkles size={16} />}
                </div>

                <span
                  className={`text-lg sm:text-xl font-medium tracking-wide ${
                    isLast
                      ? "font-serif text-2xl sm:text-3xl text-white font-bold"
                      : "text-[#DDD6FE]"
                  }`}
                >
                  {step}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
