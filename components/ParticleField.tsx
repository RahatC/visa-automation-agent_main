"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
      color: [
        "rgba(139, 92, 246, VAR)",
        "rgba(59, 130, 246, VAR)",
        "rgba(16, 185, 129, VAR)",
        "rgba(251, 191, 36, VAR)",
        "rgba(244, 114, 182, VAR)",
      ][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color.replace("VAR", String(p.opacity)),
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
