import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-[#303030]">
      {/* Main Footer */}
      <div className="section-padding !py-16 lg:!py-24">
        {/* Top Section - Brand */}
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#303030]">
            EVENGROUND
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Dance Studio in Austin, TX
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-12 lg:pt-16">
          {/* Hours */}
          <div>
            <h4 className="text-s font-semibold tracking-[0.2em] uppercase text-[#ffb800] mb-8">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between">
                <span className="text-gray-400">Mon - Fri</span>
                <span>6PM - 10:30PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span>1PM - 5:30PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span>8PM - 10PM</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-s font-semibold tracking-[0.2em] uppercase text-[#ffb800] mb-6">
              Location
            </h4>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              8000 Anderson Sq, Ste 104<br />
              Austin, TX 78757
            </address>
            <a
              href="https://maps.app.goo.gl/FViU5GP33kaYGPqA6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#ffb800] transition-colors mt-3"
            >
              Get Directions
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-s font-semibold tracking-[0.2em] uppercase text-[#ffb800] mb-6">
              Contact
            </h4>
            <a
              href="mailto:contact@evengroundtx.com"
              className="text-sm text-gray-600 hover:text-[#ffb800] transition-colors"
            >
              contact@evengroundtx.com
            </a>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-s font-semibold tracking-[0.2em] uppercase text-[#ffb800] mb-6">
              Follow
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/evengroundtx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#ffb800] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://youtube.com/@evengroundtx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#ffb800] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="section-padding !py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[11px]">
            &copy; {new Date().getFullYear()} Evenground. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-gray-400">
            <Link href="#classes" className="hover:text-[#303030] transition-colors">Classes</Link>
            <Link href="#pricing" className="hover:text-[#303030] transition-colors">Pricing</Link>
            <Link href="/about-us" className="hover:text-[#303030] transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
