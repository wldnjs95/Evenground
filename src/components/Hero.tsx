'use client';

import Image from 'next/image';

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
        onEnded={() => console.log("[video] ended")}
        onError={(e) => console.log("[video] error", e)}
        onStalled={() => console.log("[video] stalled")}
        onWaiting={() => console.log("[video] waiting")}
        onPause={() => console.log("[video] pause")}
      >
        <source src="/hero_video_fixed.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo - Large and Prominent */}
        <div className="relative w-[360px] sm:w-[540px] md:w-[700px] lg:w-[900px] xl:w-[1000px] h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px] xl:h-[300px] mx-auto mb-12">
          <Image
            src="/white-logo-text-long.webp"
            alt="Evenground"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-16">
          <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed text-center">
            A street dance studio in Austin, TX dedicated to community, creativity, and cultivation.
          </p>

          <a
            href="/about-us"
            className="btn bg-white text-black hover:bg-white/90 transition-colors"
          >
            Learn More
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
