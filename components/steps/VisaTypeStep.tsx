"use client";

import { motion } from "framer-motion";
import Mascot from "../Mascot";

interface VisaTypeStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const VISA_TYPES = [
  {
    id: "work",
    icon: "💼",
    title: "Work Visa",
    description: "Employment & career opportunities",
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: "student",
    icon: "🎓",
    title: "Student Visa",
    description: "Education & academic programs",
    color: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/30",
  },
  {
    id: "tourist",
    icon: "🏖️",
    title: "Tourist Visa",
    description: "Travel & leisure experiences",
    color: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    id: "business",
    icon: "🤝",
    title: "Business Visa",
    description: "Meetings, conferences & trade",
    color: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    id: "family",
    icon: "👨‍👩‍👧‍👦",
    title: "Family Visa",
    description: "Join family members abroad",
    color: "from-pink-500/20 to-rose-500/10",
    borderColor: "border-pink-500/30",
  },
  {
    id: "immigration",
    icon: "🏡",
    title: "Immigration",
    description: "Permanent residency & citizenship",
    color: "from-indigo-500/20 to-blue-500/10",
    borderColor: "border-indigo-500/30",
  },
];

export default function VisaTypeStep({ value, onChange, onNext, onBack }: VisaTypeStepProps) {
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
        message={value ? "Great choice! This helps me a lot!" : "What's the purpose of your trip?"}
      />

      <motion.div
        className="grid grid-cols-2 gap-3 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {VISA_TYPES.map((visa, i) => (
          <motion.button
            key={visa.id}
            onClick={() => onChange(visa.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className={`relative flex flex-col items-center gap-2 p-5 rounded-2xl text-center transition-all duration-300 border ${
              value === visa.id
                ? `bg-gradient-to-br ${visa.color} ${visa.borderColor} shadow-lg`
                : "bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/15"
            }`}
          >
            <motion.span
              className="text-3xl"
              animate={value === visa.id ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              {visa.icon}
            </motion.span>
            <span className={`font-semibold text-sm ${value === visa.id ? "text-white" : "text-white/70"}`}>
              {visa.title}
            </span>
            <span className="text-[11px] text-white/40 leading-tight">{visa.description}</span>

            {value === visa.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-[10px]">✓</span>
              </motion.div>
            )}
          </motion.button>
        ))}
      </motion.div>

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
          Continue →
        </motion.button>
      </div>
    </motion.div>
  );
}
