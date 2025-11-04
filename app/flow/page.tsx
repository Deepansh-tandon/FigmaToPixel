import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingSection from "../components/BookingSection";
import Link from "next/link";

export default function FlowPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-[120px] pb-16 relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Back Button */}
          <Link href="/work">
            <button 
              className="flex items-center gap-2 mb-8 text-gray-800 hover:text-gray-600 transition-colors px-4 py-2 rounded-full bg-white"
              style={{
                border: '2px dashed #00D0FF',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                Back To Our Work
              </span>
            </button>
          </Link>

          {/* Gradient Box */}
          <div
            className="relative rounded-[20px] shadow-lg mx-auto mb-12 h-[300px] md:h-[450px] lg:h-[649px]"
            style={{
              width: '100%',
              maxWidth: '1429px',
              background: 'linear-gradient(294.29deg, #FFFFFF 3.66%, #BDD8EB 99.46%)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              zIndex: 10,
            }}
          >
            {/* Content inside the box can go here */}
          </div>

          {/* Content Section */}
          <div className="max-w-[1429px] mx-auto mt-16">
            {/* Header Section with Title and View Project Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <h1
                className="text-3xl md:text-4xl lg:text-[40px]"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  lineHeight: '56px',
                  letterSpacing: '0%',
                  color: 'rgba(64, 64, 64, 1)',
                }}
              >
                BillFlow
              </h1>
              
              <div
                className="rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(90deg, #9CC6FF 0%, #00D0FF 100%)',
                }}
              >
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    color: 'rgba(0, 0, 0, 1)',
                  }}
                >
                  View Project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H8M12 4V8" stroke="rgba(0, 0, 0, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Info Grid: Year, Expertise, Platform */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 p-6 md:p-8 rounded-[20px]"
              style={{
                border: '2px solid rgba(189, 230, 255, 1)',
              }}
            >
              {/* Year */}
              <div className="text-center md:text-left">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '0.05em',
                    color: 'rgba(120, 120, 120, 1)',
                    textTransform: 'uppercase',
                  }}
                >
                  YEAR
                </h3>
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    color: 'rgba(32, 32, 32, 1)',
                  }}
                >
                  2025
                </p>
              </div>

              {/* Expertise */}
              <div className="flex flex-col items-center text-center">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '0.05em',
                    color: '#565656',
                    textTransform: 'uppercase',
                  }}
                >
                  EXPERTISE
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span
                    className="px-4 py-2 rounded-full"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                      background: 'rgba(225, 239, 249, 1)',
                    }}
                  >
                    UI/UX
                  </span>
                  <span
                    className="px-4 py-2 rounded-full"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                      background: 'rgba(225, 239, 249, 1)',
                    }}
                  >
                    Web Development
                  </span>
                  <span
                    className="px-4 py-2 rounded-full"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                      background: 'rgba(225, 239, 249, 1)',
                    }}
                  >
                    Mobile App
                  </span>
                </div>
              </div>

              {/* Platform */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '0.05em',
                    color: '#565656',
                    textTransform: 'uppercase',
                  }}
                >
                  PLATFORM
                </h3>
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    color: 'rgba(32, 32, 32, 1)',
                  }}
                >
                  Web App
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mb-16">
              <h2
                className="text-center mb-8 text-3xl md:text-4xl lg:text-[40px]"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  lineHeight: '48px',
                  letterSpacing: '0%',
                  color: 'rgba(120, 120, 120, 1)',
                }}
              >
                Overview
              </h2>
              <p
                className="text-justify max-w-[1000px] mx-auto text-base md:text-lg lg:text-[19px]"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  lineHeight: '1.8',
                  letterSpacing: '0%',
                  color: 'rgba(0, 0, 0, 1)',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* The Product Section */}
            <div className="mb-16">
              <h2
                className="text-center mb-12 text-3xl md:text-4xl lg:text-[40px]"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  lineHeight: '48px',
                  letterSpacing: '0%',
                  color: 'rgba(120, 120, 120, 1)',
                }}
              >
                The Product
              </h2>

              {/* Product Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 md:px-8">
                {/* Left: Image/Box */}
                <div
                  className="rounded-3xl shadow-lg mx-auto w-full lg:w-[85%] h-[300px] md:h-[450px] lg:h-[550px]"
                  style={{
                    background: 'linear-gradient(294.29deg, #FFFFFF 3.66%, #BDD8EB 99.46%)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    zIndex: 10,
                  }}
                ></div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center px-4 md:px-0">
                  <h3
                    className="mb-6 text-xl md:text-2xl lg:text-[24px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 600,
                      lineHeight: '40px',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    Hero Section
                  </h3>
                  <p
                    className="text-base md:text-lg lg:text-[19px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      lineHeight: '1.8',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
            </div>

            {/* Second Product Section - Reversed Layout */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 md:px-8">
                {/* Left: Content */}
                <div className="flex flex-col justify-center px-4 md:px-0 order-2 lg:order-1">
                  <h3
                    className="mb-6 text-xl md:text-2xl lg:text-[24px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 600,
                      lineHeight: '40px',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    Hero Section
                  </h3>
                  <p
                    className="text-base md:text-lg lg:text-[19px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                      lineHeight: '1.8',
                      letterSpacing: '0%',
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>

                {/* Right: Image/Box */}
                <div
                  className="rounded-3xl shadow-lg mx-auto w-full lg:w-[85%] h-[300px] md:h-[450px] lg:h-[550px] order-1 lg:order-2"
                  style={{
                    background: 'linear-gradient(294.29deg, #FFFFFF 3.66%, #BDD8EB 99.46%)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    zIndex: 10,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[150px]"></div>
      {/* Footer */}
      <BookingSection />
      <Footer />
    </div>
  );
}

