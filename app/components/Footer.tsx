import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-0 pb-4 mt-[-120px] pt-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          {/* Brand Information Section (Left) */}
          <div className="flex flex-col gap-2 md:max-w-[400px] items-start w-full md:w-auto">
            {/* Logo and Brand Name */}
            <div className="flex items-center -ml-4">
              <Image
                src="/Logo.svg"
                alt="LaunchPad Labs"
                width={250}
                height={42}
                className="h-[50px] md:h-[70px] w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600" style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '31px',
              letterSpacing: '0%',
            }}>
              We build high-quality MVPs to transform 
              <br />your ideas into reality.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-2">
              {/* X/Twitter Icon */}
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#3B9DFF"/>
                </svg>
              </div>

              {/* LinkedIn Icon */}
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#3B9DFF"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Columns (Right) */}
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 xl:gap-20 flex-1 justify-start md:justify-end w-full md:w-auto">
            {/* Services Column */}
            <div className="flex flex-col gap-3 md:gap-4 min-w-[140px] flex-1 md:flex-initial">
              <h3 className="text-gray-900" style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '17px',
                lineHeight: '31px',
                letterSpacing: '0%',
              }}>
                Services
              </h3>
              <ul className="flex flex-col gap-2 md:gap-2.5">
                {['MVP Development', 'UI/UX Design', 'Web Development', 'Mobile Apps', 'Consulting'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '31px',
                      letterSpacing: '0%',
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Column */}
            <div className="flex flex-col gap-3 md:gap-4 min-w-[140px] flex-1 md:flex-initial">
              <h3 className="text-gray-900" style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '17px',
                lineHeight: '31px',
                letterSpacing: '0%',
              }}>
                About
              </h3>
              <ul className="flex flex-col gap-2 md:gap-2.5">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                  }}>
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                  }}>
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                  }}>
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                  }}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Portfolio Column */}
            <div className="flex flex-col gap-3 md:gap-4 min-w-[140px] flex-1 md:flex-initial">
              <h3 className="text-gray-900" style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '17px',
                lineHeight: '31px',
                letterSpacing: '0%',
              }}>
                Portfolio
              </h3>
              <ul className="flex flex-col gap-2 md:gap-2.5">
                {['Case Studies', 'Success Stories', 'MVP Showcase', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '31px',
                      letterSpacing: '0%',
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-3 md:gap-4 min-w-[140px] flex-1 md:flex-initial">
              <h3 className="text-gray-900" style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '17px',
                lineHeight: '31px',
                letterSpacing: '0%',
              }}>
                Legal
              </h3>
              <ul className="flex flex-col gap-2 md:gap-2.5">
                {['Privacy Policy', 'Terms of Services', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '31px',
                      letterSpacing: '0%',
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SVG Divider - Only shown above md */}
        <div className="hidden md:block w-full mt-8 md:mt-12">
          <Image
            src="/Group 1707483684.svg"
            alt=""
            width={1392}
            height={236}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Copyright Text */}
        <div className="w-full mt-6 md:mt-8">
          <p className="text-center" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: '31px',
            letterSpacing: '0%',
            color:"rgba(129, 129, 129, 1)"
          }}>
            © 2025 LinkVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

