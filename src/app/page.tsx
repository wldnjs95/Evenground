import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Marquee />

        {/* Welcome Section */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
              Welcome
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
              A Home for Dancers
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Evenground is a street dance studio based in Austin, TX. We provide a space
              where dancers of all levels come together to learn, grow, and express themselves
              through movement. Our mission is to cultivate community, creativity, and personal
              growth through the art of street dance.
            </p>
          </div>
        </section>

        {/* Classes Section */}
        <Section
          id="classes"
          subtitle="Weekly Training"
          title="Weekly Classes"
          description="Join our weekly classes taught by experienced instructors in various street dance styles including Hip Hop, House, Breaking, Popping, and more. Whether you're a beginner or advanced dancer, we have classes designed to help you grow."
          buttonText="View Classes"
          buttonLink="#classes"
          imageSrc="https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80"
          imageAlt="Dance class in progress"
          light
        />

        {/* Teams Section */}
        <Section
          id="teams"
          subtitle="Join a Team"
          title="Studio Teams"
          description="Our studio teams are for dancers who want to take their training to the next level. Teams rehearse weekly and perform at showcases, battles, and community events. Auditions are held seasonally."
          buttonText="Learn More"
          buttonLink="#teams"
          imageSrc="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80"
          imageAlt="Dance team performing"
          reverse
        />

        {/* Studio Rental Section */}
        <Section
          id="studio-rental"
          subtitle="Private Space"
          title="Studio Rentals"
          description="Need a space to practice, rehearse, or create? Our studio is available for private rentals. The space features professional dance flooring, mirrors, and a sound system. Perfect for rehearsals, private lessons, or video shoots."
          buttonText="Book Now"
          buttonLink="#studio-rental"
          imageSrc="https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=800&q=80"
          imageAlt="Dance studio space"
          light
        />

        {/* About Section */}
        <Section
          id="about"
          subtitle="Our Story"
          title="About Us"
          description="Founded with a passion for street dance culture, Evenground was created to be more than just a dance studio—it's a home for our community. We believe in the power of dance to bring people together and create lasting connections."
          buttonText="Learn More"
          buttonLink="#about"
          imageSrc="https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&q=80"
          imageAlt="Community of dancers"
          reverse
        />

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
                Membership
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                Pricing
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Drop-in */}
              <div className="bg-white p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-colors">
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-3">
                  Single Class
                </p>
                <h3 className="text-2xl font-light mb-1">Drop-in</h3>
                <p className="text-4xl font-light mb-6">
                  $18
                  <span className="text-base text-gray-400 ml-1">/class</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Single class access
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    No commitment required
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Try any style
                  </li>
                </ul>
                <a href="#" className="btn btn-outline w-full">
                  Get Started
                </a>
              </div>

              {/* Monthly Unlimited */}
              <div className="bg-[#1a1a1a] text-white p-8 lg:p-10 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase bg-white text-black px-3 py-1">
                    Popular
                  </span>
                </div>
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-3">
                  Unlimited
                </p>
                <h3 className="text-2xl font-light mb-1">Monthly</h3>
                <p className="text-4xl font-light mb-6">
                  $120
                  <span className="text-base text-gray-500 ml-1">/month</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited classes
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    All styles included
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority registration
                  </li>
                </ul>
                <a href="#" className="btn btn-white w-full">
                  Subscribe
                </a>
              </div>

              {/* Class Pack */}
              <div className="bg-white p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-colors">
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-3">
                  Value Pack
                </p>
                <h3 className="text-2xl font-light mb-1">10-Class Pack</h3>
                <p className="text-4xl font-light mb-6">
                  $150
                  <span className="text-base text-gray-400 ml-1">/pack</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    10 classes included
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Valid for 3 months
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible schedule
                  </li>
                </ul>
                <a href="#" className="btn btn-outline w-full">
                  Buy Pack
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#1a1a1a] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Ready to Start?
            </h2>
            <p className="text-gray-400 mb-10 text-base md:text-lg">
              Join our community and discover the joy of street dance.
            </p>
            <a href="#classes" className="btn btn-white">
              View Schedule
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
