"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Mascot from "../Mascot";

interface NationalityStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  firstName: string;
}

const POPULAR_COUNTRIES = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇰🇷", name: "South Korea" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇨🇳", name: "China" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇪🇸", name: "Spain" },
];

export default function NationalityStep({ value, onChange, onNext, onBack, firstName }: NationalityStepProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = searchTerm
    ? POPULAR_COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : POPULAR_COUNTRIES;

  const getMessage = () => {
    if (value) return `${value}! Great, ${firstName}! 🌎`;
    return `Where are you from, ${firstName}?`;
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
        mood={value ? "excited" : "thinking"}
        size="md"
        message={getMessage()}
      />

      <div className="w-full space-y-3">
        <motion.input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search your country..."
          className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all focus:border-violet-500/50 input-glow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <motion.div
          className="grid grid-cols-2 gap-2 max-h-[280px] overflow-y-auto pr-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filtered.map((country, i) => (
            <motion.button
              key={country.name}
              onClick={() => onChange(country.name)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                value === country.name
                  ? "bg-violet-600/30 border border-violet-500/50 text-white shadow-lg shadow-violet-500/10"
                  : "bg-white/5 border border-white/5 text-white/70 hover:bg-white/10 hover:border-white/15"
              }`}
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-sm truncate">{country.name}</span>
              {value === country.name && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto text-emerald-400"
                >
                  ✓
                </motion.span>
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
