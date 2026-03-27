"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Mascot from "../Mascot";

interface NameStepProps {
  value: { firstName: string; lastName: string; email: string };
  onChange: (value: { firstName: string; lastName: string; email: string }) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function NameStep({ value, onChange, onNext, onBack }: NameStepProps) {
  const [focused, setFocused] = useState<string | null>(null);
  const [mascotMessage, setMascotMessage] = useState("What should I call you?");

  useEffect(() => {
    if (value.firstName && !value.lastName) {
      setMascotMessage(`Nice name, ${value.firstName}! What's your last name?`);
    } else if (value.firstName && value.lastName && !value.email) {
      setMascotMessage(`${value.firstName} ${value.lastName} — love it! Now your email?`);
    } else if (value.email) {
      setMascotMessage("Perfect! Let's keep going! 🚀");
    } else {
      setMascotMessage("What should I call you?");
    }
  }, [value.firstName, value.lastName, value.email]);

  const isValid = value.firstName.trim() && value.lastName.trim() && value.email.includes("@");

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-6 px-4 w-full max-w-md mx-auto"
    >
      <Mascot
        mood={value.firstName ? "happy" : "thinking"}
        size="md"
        message={mascotMessage}
      />

      <div className="w-full space-y-4 mt-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-white/50 mb-2 ml-1">First Name</label>
          <motion.input
            type="text"
            value={value.firstName}
            onChange={(e) => onChange({ ...value, firstName: e.target.value })}
            onFocus={() => setFocused("firstName")}
            onBlur={() => setFocused(null)}
            placeholder="e.g. Alex"
            className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white text-lg font-medium transition-all duration-300 ${
              focused === "firstName"
                ? "border-violet-500/50 input-glow"
                : value.firstName
                ? "border-emerald-500/30"
                : "border-white/10"
            }`}
            animate={focused === "firstName" ? { scale: 1.01 } : { scale: 1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-white/50 mb-2 ml-1">Last Name</label>
          <motion.input
            type="text"
            value={value.lastName}
            onChange={(e) => onChange({ ...value, lastName: e.target.value })}
            onFocus={() => setFocused("lastName")}
            onBlur={() => setFocused(null)}
            placeholder="e.g. Rivera"
            className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white text-lg font-medium transition-all duration-300 ${
              focused === "lastName"
                ? "border-violet-500/50 input-glow"
                : value.lastName
                ? "border-emerald-500/30"
                : "border-white/10"
            }`}
            animate={focused === "lastName" ? { scale: 1.01 } : { scale: 1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-white/50 mb-2 ml-1">Email</label>
          <motion.input
            type="email"
            value={value.email}
            onChange={(e) => onChange({ ...value, email: e.target.value })}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="you@example.com"
            className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white text-lg font-medium transition-all duration-300 ${
              focused === "email"
                ? "border-violet-500/50 input-glow"
                : value.email.includes("@")
                ? "border-emerald-500/30"
                : "border-white/10"
            }`}
            animate={focused === "email" ? { scale: 1.01 } : { scale: 1 }}
          />
        </motion.div>
      </div>

      <div className="flex gap-3 w-full mt-2">
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
          disabled={!isValid}
          className={`flex-1 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
            isValid
              ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white btn-glow"
              : "bg-white/5 text-white/20 cursor-not-allowed"
          }`}
          whileHover={isValid ? { scale: 1.02 } : {}}
          whileTap={isValid ? { scale: 0.98 } : {}}
        >
          Continue →
        </motion.button>
      </div>
    </motion.div>
  );
}
