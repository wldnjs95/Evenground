'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_video_fixed.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Logo - Large and Prominent */}
        <motion.div
          variants={itemVariants}
          className="relative w-[360px] sm:w-[540px] md:w-[700px] lg:w-[900px] xl:w-[1000px] h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px] xl:h-[300px] mx-auto mb-12"
        >
          <Image
            src="/white-logo-text-long.webp"
            alt="Evenground"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-white/70 text-sm md:text-base tracking-[0.15em] uppercase font-medium mb-10"
        >
          Evenground Dance Studio
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="/classes"
          className="btn btn-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View Classes
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-white/40 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white"
              animate={{ height: ['0%', '100%'], top: ['0%', '0%'] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
