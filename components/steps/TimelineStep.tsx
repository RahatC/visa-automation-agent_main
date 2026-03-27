"use client";

import { motion } from "framer-motion";
import Mascot from "../Mascot";

interface TimelineStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const TIMELINES = [
  {
    id: "asap",
    icon: "⚡",
    title: "ASAP",
    subtitle: "As soon as possible",
    description: "I need to travel urgently",
    urgencyColor: "from-red-500/20 to-orange-500/10",
    border: "border-red-500/30",
  },
  {
    id: "1-3months",
    icon: "📅",
    title: "1–3 Months",
    subtitle: "Near future",
    description: "I have some time to prepare",
    urgencyColor: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
  },
  {
    id: "3-6months",
    icon: "🗓️",
    title: "3–6 Months",
    subtitle: "Planning ahead",
    description: "I want to be well-prepared",
    urgencyColor: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
  },
  {
    id: "6months+",
    icon: "🌱",
    title: "6+ Months",
    subtitle: "Long-term planning",
    description: "Just exploring my options",
    urgencyColor: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30",
  },
];

export default function TimelineStep({ value, onChange, onNext, onBack }: TimelineStepProps) {
  const getMessage = () => {
    switch (value) {
      case "asap": return "No worries, we'll fast-track this! 🏃‍♂️";
      case "1-3months": return "Good timeline! We'll get you ready!";
      case "3-6months": return "Smart planning! Plenty of time! 💪";
      case "6months+": return "Great to start early! Let's explore!";
      default: return "When are you planning to travel?";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-5 px-4 w-full max-w-md mx-auto"
    >
      <Mascot
        mood={value ? "happy" : "thinking"}
        size="md"
        message={getMessage()}
      />

      <div className="w-full space-y-3">
        {TIMELINES.map((timeline, i) => (
          <motion.button
            key={timeline.id}
            onClick={() => onChange(timeline.id)}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 border ${
              value === timeline.id
                ? `bg-gradient-to-r ${timeline.urgencyColor} ${timeline.border} shadow-lg`
                : "bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/15"
            }`}
          >
            <motion.span
              className="text-3xl"
              animate={value === timeline.id ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {timeline.icon}
            </motion.span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-bold ${value === timeline.id ? "text-white" : "text-white/80"}`}>
                  {timeline.title}
                </span>
                <span className="text-xs text-white/30">·</span>
                <span className="text-xs text-white/40">{timeline.subtitle}</span>
              </div>
              <p className="text-sm text-white/40 mt-0.5">{timeline.description}</p>
            </div>
            {value === timeline.id && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-xs">✓</span>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex gap-3 w-full mt-1">
        <motion.button
          onClick={onBack}
          className="px-6 py-3 rounded-xl font-medium text-white/50 hover:text-white/80 hover:bg-white/5 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={!value}
          className={`flex-1 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
            value
              ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white btn-glow"
              : "bg-white/5 text-white/20 cursor-not-allowed"
          }`}
          whileHover={value ? { scale: 1.02 } : {}}
          whileTap={value ? { scale: 0.98 } : {}}
        >
          Almost Done! →
        </motion.button>
      </div>
    </motion.div>
  );
}
