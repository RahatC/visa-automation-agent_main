"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Mascot from "../Mascot";

interface OnboardingData {
  name: { firstName: string; lastName: string; email: string };
  nationality: string;
  destination: string;
  visaType: string;
  timeline: string;
}

interface CelebrationStepProps {
  data: OnboardingData;
  onComplete: () => void;
}

const VISA_LABELS: Record<string, string> = {
  work: "Work Visa",
  student: "Student Visa",
  tourist: "Tourist Visa",
  business: "Business Visa",
  family: "Family Visa",
  immigration: "Immigration",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "1-3months": "1–3 Months",
  "3-6months": "3–6 Months",
  "6months+": "6+ Months",
};

export default function CelebrationStep({ data, onComplete }: CelebrationStepProps) {
  const confettiTriggered = useRef(false);

  useEffect(() => {
    if (confettiTriggered.current) return;
    confettiTriggered.current = true;

    const launchConfetti = async () => {
      try {
        const confetti = (await import("canvas-confetti")).default;

        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
          confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"],
          });
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"],
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };
        frame();

        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { x: 0.5, y: 0.5 },
            colors: ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"],
          });
        }, 500);
      } catch {
        // confetti not available
      }
    };

    launchConfetti();
  }, []);

  const summaryItems = [
    { label: "Name", value: `${data.name.firstName} ${data.name.lastName}`, icon: "👤" },
    { label: "Email", value: data.name.email, icon: "📧" },
    { label: "Nationality", value: data.nationality, icon: "🏠" },
    { label: "Destination", value: data.destination, icon: "✈️" },
    { label: "Visa Type", value: VISA_LABELS[data.visaType] || data.visaType, icon: "📋" },
    { label: "Timeline", value: TIMELINE_LABELS[data.timeline] || data.timeline, icon: "⏰" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-5 px-4 w-full max-w-md mx-auto"
    >
      <Mascot
        mood="celebrate"
        size="lg"
        message={`You're all set, ${data.name.firstName}! 🎉`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold gradient-text">Profile Complete!</h2>
        <p className="text-white/40 text-sm mt-1">Here&apos;s a summary of your journey details</p>
      </motion.div>

      {/* XP Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-500/30"
      >
        <span className="text-lg">⭐</span>
        <span className="text-amber-300 font-bold text-sm">+250 XP Earned!</span>
        <span className="text-lg">⭐</span>
      </motion.div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full glass-strong rounded-2xl p-5 space-y-3"
      >
        {summaryItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
          >
            <span className="text-lg">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
              <p className="text-white font-medium truncate">{item.value}</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-emerald-400 text-sm"
            >
              ✓
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        onClick={onComplete}
        className="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-500 text-white btn-glow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center gap-2">
          🚀 Start My Visa Journey
        </span>
      </motion.button>
    </motion.div>
  );
}
