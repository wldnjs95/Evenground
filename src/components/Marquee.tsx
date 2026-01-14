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

  const allWords = [...words, ...words];

  return (
    <section className="py-6 md:py-8 bg-[#1a1a1a] overflow-hidden">
      <div className="flex animate-marquee">
        {allWords.map((word, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-white text-lg md:text-2xl font-light tracking-[0.15em] uppercase px-6 md:px-10">
              {word}
            </span>
            <span className="text-gray-600 text-lg md:text-2xl">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
