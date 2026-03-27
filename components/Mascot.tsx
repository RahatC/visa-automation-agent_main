"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

type MascotMood = "wave" | "happy" | "thinking" | "excited" | "celebrate" | "love";

interface MascotProps {
  mood?: MascotMood;
  size?: "sm" | "md" | "lg";
  message?: string;
}

export default function Mascot({ mood = "wave", size = "md", message }: MascotProps) {
  const sizeMap = { sm: 80, md: 120, lg: 160 };
  const px = sizeMap[size];

  const moodEmoji = useMemo(() => {
    switch (mood) {
      case "wave": return { eyes: "◕ ◕", mouth: "◡", extra: "👋", blush: false };
      case "happy": return { eyes: "◕ ◕", mouth: "◡", extra: "✨", blush: true };
      case "thinking": return { eyes: "◑ ◐", mouth: "◠", extra: "💭", blush: false };
      case "excited": return { eyes: "★ ★", mouth: "▽", extra: "🎉", blush: true };
      case "celebrate": return { eyes: "◕ ◕", mouth: "▽", extra: "🎊", blush: true };
      case "love": return { eyes: "♥ ♥", mouth: "◡", extra: "💜", blush: true };
      default: return { eyes: "◕ ◕", mouth: "◡", extra: "✨", blush: false };
    }
  }, [mood]);

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
          rotate: mood === "wave" ? [0, -5, 5, -5, 0] : [0, -2, 2, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: mood === "wave" ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Glow behind mascot */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: px,
            height: px,
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Main body - passport shaped */}
        <svg width={px} height={px} viewBox="0 0 120 120" fill="none">
          {/* Body shadow */}
          <ellipse cx="60" cy="108" rx="35" ry="6" fill="rgba(0,0,0,0.2)" />

          {/* Passport body */}
          <motion.rect
            x="20" y="10" width="80" height="95" rx="16"
            fill="url(#bodyGradient)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />

          {/* Inner passport detail */}
          <rect x="28" y="18" width="64" height="79" rx="10" fill="rgba(255,255,255,0.05)" />

          {/* Gold stamp decoration */}
          <circle cx="60" cy="35" r="12" fill="none" stroke="rgba(251,191,36,0.4)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="60" cy="35" r="8" fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="0.5" />

          {/* Eyes */}
          <motion.g
            animate={mood === "excited" ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <text
              x="60" y="58"
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontFamily="system-ui"
            >
              {moodEmoji.eyes}
            </text>
          </motion.g>

          {/* Blush */}
          {moodEmoji.blush && (
            <>
              <motion.circle
                cx="38" cy="62" r="5"
                fill="rgba(244,114,182,0.3)"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="82" cy="62" r="5"
                fill="rgba(244,114,182,0.3)"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </>
          )}

          {/* Mouth */}
          <text
            x="60" y="74"
            textAnchor="middle"
            fontSize="12"
            fill="white"
            fontFamily="system-ui"
          >
            {moodEmoji.mouth}
          </text>

          {/* Little feet */}
          <motion.ellipse
            cx="45" cy="106" rx="8" ry="4" fill="#7c3aed"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.ellipse
            cx="75" cy="106" rx="8" ry="4" fill="#7c3aed"
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />

          <defs>
            <linearGradient id="bodyGradient" x1="20" y1="10" x2="100" y2="105">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#6d28d9" />
              <stop offset="100%" stopColor="#5b21b6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating emoji */}
        <motion.span
          className="absolute -top-2 -right-2 text-xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {moodEmoji.extra}
        </motion.span>
      </motion.div>

      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative glass rounded-2xl px-5 py-3 max-w-xs text-center"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 glass" />
            <p className="text-sm text-white/90 font-medium relative z-10">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
