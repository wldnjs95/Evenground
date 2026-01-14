interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  light?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse = false,
  light = false,
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${light ? 'bg-[#fafafa]' : 'bg-white'}`}>
      <div className="max-w-[1600px] mx-auto">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${reverse ? 'direction-rtl' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:order-2' : ''}`}>
            <div className="img-container aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:order-1' : ''} lg:px-8`}>
            {subtitle && (
              <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <a href={buttonLink} className="btn btn-dark">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
