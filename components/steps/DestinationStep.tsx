"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Mascot from "../Mascot";

interface DestinationStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const DESTINATIONS = [
  { flag: "🇺🇸", name: "United States", tagline: "Land of opportunity" },
  { flag: "🇬🇧", name: "United Kingdom", tagline: "Rich heritage & culture" },
  { flag: "🇨🇦", name: "Canada", tagline: "Welcoming & diverse" },
  { flag: "🇦🇺", name: "Australia", tagline: "Adventure awaits" },
  { flag: "🇩🇪", name: "Germany", tagline: "Innovation hub" },
  { flag: "🇫🇷", name: "France", tagline: "Art, food & fashion" },
  { flag: "🇯🇵", name: "Japan", tagline: "Future meets tradition" },
  { flag: "🇸🇬", name: "Singapore", tagline: "Global business center" },
  { flag: "🇦🇪", name: "UAE", tagline: "Luxury & ambition" },
  { flag: "🇳🇿", name: "New Zealand", tagline: "Pure natural beauty" },
  { flag: "🇳🇱", name: "Netherlands", tagline: "Progressive & open" },
  { flag: "🇨🇭", name: "Switzerland", tagline: "Precision & nature" },
];

export default function DestinationStep({ value, onChange, onNext, onBack }: DestinationStepProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = searchTerm
    ? DESTINATIONS.filter((d) =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : DESTINATIONS;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-5 px-4 w-full max-w-md mx-auto"
    >
      <Mascot
        mood={value ? "excited" : "thinking"}
        size="md"
        message={value ? `${value}! Amazing choice! ✈️` : "Where do you want to go?"}
      />

      <div className="w-full space-y-3">
        <motion.input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search destination..."
          className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all focus:border-violet-500/50 input-glow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <motion.div
          className="grid grid-cols-1 gap-2 max-h-[280px] overflow-y-auto pr-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {filtered.map((dest, i) => (
            <motion.button
              key={dest.name}
              onClick={() => onChange(dest.name)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                value === dest.name
                  ? "bg-gradient-to-r from-violet-600/25 to-blue-600/15 border border-violet-500/40 shadow-lg shadow-violet-500/10"
                  : "bg-white/5 border border-white/5 hover:bg-white/8 hover:border-white/15"
              }`}
            >
              <span className="text-3xl">{dest.flag}</span>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold ${value === dest.name ? "text-white" : "text-white/80"}`}>
                  {dest.name}
                </p>
                <p className="text-xs text-white/40 truncate">{dest.tagline}</p>
              </div>
              {value === dest.name && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                >
                  <span className="text-white text-xs">✓</span>
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>
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
          Continue →
        </motion.button>
      </div>
    </motion.div>
  );
}
