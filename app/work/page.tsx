import Nav from "../components/Nav";
import Footer from "../components/Footer";
import OurWorkButton from "../components/OurWorkButton";
import Image from "next/image";
import WorkCard from "../components/WorkCard";
import BookingSection from "../components/BookingSection";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-[120px] pb-16 overflow-x-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            {/* Left Section - Work Content */}
            <div className="flex-1">
              {/* Header Section */}
              <div>
                {/* Main Heading */}
                <h1
                  className="mb-3 text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[31px]"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    letterSpacing: '0%',
                    color: 'rgba(32, 32, 32, 1)',
                  }}
                >
                  From vision to{" "}
                  <span
                    className="text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[31px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 600,
                      letterSpacing: '0%',
                      background: 'linear-gradient(90deg, #231BAF 0%, #0FA6EC 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Launchpad
                  </span>
                </h1>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                    color: 'rgba(104, 104, 104, 1)',
                  }}
                >
                  See how we&apos;ve helped founders launch and scale their MVPs
                </p>
              </div>
            </div>

            {/* Right Section - Work Image */}
            <div className="flex-shrink-0 lg:ml-auto">
              <Image
                src="/Group 1707483688.svg"
                alt="Our Work"
                width={411}
                height={187}
                className="w-auto h-auto max-w-[550px] rounded-2xl"
              />
            </div>
          </div>

          {/* Work Cards Section */}
          <div className="mt-16 space-y-8">
            <WorkCard
              title="FitAI"
              description="FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere."
              tags={["UI/UX", "Web Development", "Mobile App"]}
            />
            <WorkCard
              title="FitAI"
              description="FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere."
              tags={["UI/UX", "Web Development", "Mobile App"]}
            />
            <WorkCard
              title="FitAI"
              description="FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere."
              tags={["UI/UX", "Web Development", "Mobile App"]}
            />
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

