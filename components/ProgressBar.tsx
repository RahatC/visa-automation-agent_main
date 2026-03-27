"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export default function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  const progress = ((currentStep) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Step indicators */}
      <div className="relative flex justify-between items-center mb-2">
        {/* Background track */}
        <div className="absolute left-0 right-0 h-1 bg-white/10 rounded-full top-1/2 -translate-y-1/2" />

        {/* Animated fill */}
        <motion.div
          className="absolute left-0 h-1 rounded-full top-1/2 -translate-y-1/2"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #3b82f6, #10b981)",
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Step dots */}
        {labels.map((_, i) => (
          <motion.div
            key={i}
            className="relative z-10 flex items-center justify-center"
            initial={false}
            animate={{
              scale: i === currentStep ? 1.3 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                i < currentStep
                  ? "bg-violet-500 border-violet-400"
                  : i === currentStep
                  ? "bg-violet-600 border-violet-400 shadow-lg shadow-violet-500/50"
                  : "bg-white/5 border-white/20"
              }`}
            >
              {i < currentStep && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-full h-full p-0.5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </motion.svg>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current step label */}
      <motion.p
        key={currentStep}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-xs text-white/40 mt-1 font-medium"
      >
        {labels[currentStep]}
      </motion.p>
    </div>
  );
}
