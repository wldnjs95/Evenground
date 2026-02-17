'use client';

import React from 'react';

interface ExternalLinkProps {
  href: string;
  platform?: string;
  showPlatform?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function ExternalLink({
  href,
  platform,
  showPlatform = false,
  className = '',
  children,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <svg
        className="inline-block w-3 h-3 ml-1.5 -mt-0.5 opacity-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 17L17 7M17 7H7M17 7v10"
        />
      </svg>
      {showPlatform && platform && (
        <span className="ml-2 text-[10px] opacity-40 tracking-wider uppercase font-normal">
          on {platform}
        </span>
      )}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
