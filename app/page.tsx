"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import ProgressBar from "@/components/ProgressBar";
import WelcomeStep from "@/components/steps/WelcomeStep";
import NameStep from "@/components/steps/NameStep";
import NationalityStep from "@/components/steps/NationalityStep";
import DestinationStep from "@/components/steps/DestinationStep";
import VisaTypeStep from "@/components/steps/VisaTypeStep";
import TimelineStep from "@/components/steps/TimelineStep";
import CelebrationStep from "@/components/steps/CelebrationStep";

const STEP_LABELS = [
  "Welcome",
  "Your Info",
  "Nationality",
  "Destination",
  "Visa Type",
  "Timeline",
  "All Done!",
];

interface OnboardingData {
  name: { firstName: string; lastName: string; email: string };
  nationality: string;
  destination: string;
  visaType: string;
  timeline: string;
}

export default function Home() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    name: { firstName: "", lastName: "", email: "" },
    nationality: "",
    destination: "",
    visaType: "",
    timeline: "",
  });

  const [xp, setXp] = useState(0);
  const [showXpPopup, setShowXpPopup] = useState(false);
  const [lastXpGain, setLastXpGain] = useState(0);

  const awardXp = useCallback((amount: number) => {
    setLastXpGain(amount);
    setXp((prev) => prev + amount);
    setShowXpPopup(true);
    setTimeout(() => setShowXpPopup(false), 1500);
  }, []);

  const nextStep = useCallback(() => {
    if (step < STEP_LABELS.length - 1) {
      const xpAmounts = [0, 50, 40, 50, 40, 40, 0];
      if (xpAmounts[step]) awardXp(xpAmounts[step]);
      setStep((s) => s + 1);
    }
  }, [step, awardXp]);

  const prevStep = useCallback(() => {
    if (step > 0) setStep((s) => s - 1);
  }, [step]);

  const handleComplete = () => {
    console.log("Onboarding complete:", data);
  };

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <ParticleField />

      {/* Top bar with XP */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex items-center justify-between px-6 py-4"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🛂</span>
          <span className="font-bold text-white/80 text-sm tracking-wider">VISAPAL</span>
        </div>

        {step > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass"
          >
            <span className="text-yellow-400 text-sm">⭐</span>
            <motion.span
              key={xp}
              initial={{ scale: 1.5, color: "#fbbf24" }}
              animate={{ scale: 1, color: "rgba(255,255,255,0.7)" }}
              className="font-bold text-sm"
            >
              {xp} XP
            </motion.span>
          </motion.div>
        )}
      </motion.header>

      {/* XP popup */}
      <AnimatePresence>
        {showXpPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/20 border border-amber-400/40 backdrop-blur-xl"
          >
            <span className="text-amber-300 font-bold text-lg">+{lastXpGain} XP ✨</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      {step > 0 && step < STEP_LABELS.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 px-6 py-2"
        >
          <ProgressBar
            currentStep={step - 1}
            totalSteps={STEP_LABELS.length - 2}
            labels={STEP_LABELS.slice(1, -1)}
          />
        </motion.div>
      )}

      {/* Step content */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-4">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <WelcomeStep key="welcome" onNext={nextStep} />
          )}
          {step === 1 && (
            <NameStep
              key="name"
              value={data.name}
              onChange={(v) => setData({ ...data, name: v })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 2 && (
            <NationalityStep
              key="nationality"
              value={data.nationality}
              onChange={(v) => setData({ ...data, nationality: v })}
              onNext={nextStep}
              onBack={prevStep}
              firstName={data.name.firstName}
            />
          )}
          {step === 3 && (
            <DestinationStep
              key="destination"
              value={data.destination}
              onChange={(v) => setData({ ...data, destination: v })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 4 && (
            <VisaTypeStep
              key="visaType"
              value={data.visaType}
              onChange={(v) => setData({ ...data, visaType: v })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 5 && (
            <TimelineStep
              key="timeline"
              value={data.timeline}
              onChange={(v) => setData({ ...data, timeline: v })}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 6 && (
            <CelebrationStep
              key="celebration"
              data={data}
              onComplete={handleComplete}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Bottom decoration */}
      <div className="relative z-10 h-16 flex items-center justify-center">
        {step > 0 && step < STEP_LABELS.length - 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/20 text-xs"
          >
            Step {step} of {STEP_LABELS.length - 2} · Press Enter to continue
          </motion.p>
        )}
      </div>
    </main>
  );
}
