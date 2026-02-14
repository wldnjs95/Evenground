'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type AnimationVariant = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in' | 'scale-in';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
  as?: 'div' | 'section' | 'article' | 'span';
}

const variants: Record<AnimationVariant, Variants> = {
  'fade-in-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in-left': {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-in-right': {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function AnimatedSection({
  children,
  variant = 'fade-in-up',
  delay = 0,
  duration = 0.6,
  className,
  staggerChildren,
  as = 'div',
}: AnimatedSectionProps) {
  const Component = motion.create(as);
  const selectedVariant = variants[variant];

  const containerVariants: Variants = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }
    : {
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible as object,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function AnimatedChild({
  children,
  variant = 'fade-in-up',
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
}) {
  const selectedVariant = variants[variant];

  return (
    <motion.div
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible as object,
          transition: {
            duration,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
