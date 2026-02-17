'use client';

export default function Marquee() {
  const words = [
    'Community',
    'Creativity',
    'Cultivation',
    'Growth',
    'Foundation',
    'Opportunity',
    'Training',
    'Home',
  ];

  const allWords = [...words, ...words, ...words];

  return (
    <section className="marquee-section overflow-hidden">
      <div className="flex animate-marquee">
        {allWords.map((word, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-[#333333] text-lg md:text-2xl font-light tracking-[0.15em] uppercase px-6 md:px-10">
              {word}
            </span>
            <span className="w-8 md:w-12 inline-block"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
