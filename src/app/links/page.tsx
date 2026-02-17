'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1] as const;

interface LinkItem {
  label: string;
  description: string;
  href: string;
  platform?: string;
  external: boolean;
  accent?: boolean;
}

const links: LinkItem[] = [
  {
    label: 'Book a Class',
    description: 'View schedule & register',
    href: 'https://evenground.pike13.com/schedule',
    platform: 'Pike13',
    external: true,
    accent: true,
  },
  {
    label: 'Even the Odds',
    description: 'Register for our monthly battle',
    href: 'https://events.sweatpals.com',
    platform: 'Sweatpals',
    external: true,
  },
  {
    label: 'Rent the Studio',
    description: 'Book private studio time',
    href: 'https://dnce.club',
    platform: 'dnce.club',
    external: true,
  },
  {
    label: 'Our Classes',
    description: 'Styles, levels & instructors',
    href: '/classes',
    external: false,
  },
  {
    label: 'Pricing',
    description: 'Class packs & membership',
    href: '/pricing',
    external: false,
  },
  {
    label: 'About Us',
    description: 'Our story & team',
    href: '/about-us',
    external: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] px-6 py-12 flex flex-col items-center">
      {/* Logo */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }}
      >
        <Image
          src="/logo.webp"
          alt="EvenGround"
          width={180}
          height={40}
          className="mx-auto mb-3 invert brightness-200"
          priority
        />
        <p className="text-[12px] text-white/40 tracking-[0.15em] uppercase">
          @evengroundtx
        </p>
      </motion.div>

      {/* Link Cards */}
      <motion.div
        className="w-full max-w-[420px] flex flex-col gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => {
          const cardClass = `
            group flex items-center gap-4 w-full px-5 py-4 rounded transition-all duration-200
            ${link.accent
              ? 'bg-[#ffb800]/[0.08] border border-[#ffb800]/30 hover:bg-[#ffb800]/[0.15] hover:border-[#ffb800]/50'
              : 'bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15]'
            }
          `.trim();

          const content = (
            <>
              <div className="flex-1 min-w-0">
                <p className={`text-[15px] font-medium ${link.accent ? 'text-[#ffb800]' : 'text-white'}`}>
                  {link.label}
                </p>
                <p className="text-[11px] text-white/40 mt-0.5">
                  {link.description}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                {link.external && link.platform && (
                  <span className="text-[9px] text-white/25 tracking-wider uppercase hidden sm:inline">
                    {link.platform}
                  </span>
                )}
                {link.external ? (
                  <ArrowIcon className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
                ) : (
                  <ChevronIcon className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
                )}
              </div>
            </>
          );

          return (
            <motion.div key={link.label} variants={itemVariants}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {content}
                </a>
              ) : (
                <Link href={link.href} className={cardClass}>
                  {content}
                </Link>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="mt-10 flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease }}
      >
        <a
          href="https://instagram.com/evengroundtx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#ffb800] transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href="https://youtube.com/@evengroundtx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#ffb800] transition-colors"
          aria-label="YouTube"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </motion.div>

      {/* Website Link */}
      <motion.p
        className="mt-6 text-[10px] text-white/20 tracking-[0.15em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
      >
        evengroundtx.com
      </motion.p>
    </div>
  );
}
