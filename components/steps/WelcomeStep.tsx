"use client";

import { motion } from "framer-motion";
import Mascot from "../Mascot";

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center gap-6 px-4"
    >
      <Mascot mood="wave" size="lg" message="Hey there! I'm Visapal!" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3 mt-2"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="gradient-text">Let&apos;s get to know you</span>
        </h1>
        <p className="text-white/50 text-lg max-w-md mx-auto leading-relaxed">
          I&apos;ll be your guide through the visa process. First, let me learn a bit about you so I can help you best!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col items-center gap-4 mt-4"
      >
        <motion.button
          onClick={onNext}
          className="group relative px-10 py-4 rounded-2xl font-semibold text-lg overflow-hidden"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-500 rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 flex items-center gap-2">
            Let&apos;s Go!
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        <div className="flex items-center gap-2 text-white/30 text-sm">
          <span>🔒</span>
          <span>Your info is safe with me</span>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-3xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ✈️
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 text-2xl opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        🌍
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-xl opacity-15"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        🛂
      </motion.div>
    </motion.div>
  );
}
