import Nav from "../components/Nav";
import Footer from "../components/Footer";
import OurWorkButton from "../components/OurWorkButton";
import Image from "next/image";

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-[120px] pb-30 ">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-40 pt-[50px]">
          {/* Centered Founder Tag */}
          <div className="mb-8 flex justify-center">
            <OurWorkButton text="Our Founder" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-20 items-start">
            {/* Left Column - Founder Info */}
            <div className="lg:col-span-1">
              {/* Header Section */}
              <div className="mb-8">
                {/* Main Heading */}
                <h1
                  className="mb-3"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '38px',
                    letterSpacing: '0%',
                    color: 'rgba(32, 32, 32, 1)',
                  }}
                >
                  Meet{" "}
                  <span
                    className="italic"
                    style={{
                      fontFamily: 'var(--font-instrument-serif), Instrument Serif, serif',
                      fontWeight: 400,
                      fontSize: '39px',
                      lineHeight: '38px',
                      letterSpacing: '0%',
                      color: 'rgba(0, 81, 255, 1)',
                    }}
                  >
                    Harsh
                  </span>{" "}
                  founder of LaunchPad Labs
                </h1>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '38px',
                    letterSpacing: '0%',
                    color: 'rgba(82, 82, 82, 1)',
                  }}
                >
                  Your Strategic Tech Partner for Building MVPs That Scale
                </p>
              </div>

              {/* Founder Image - Center Aligned */}
              <div className="mb-6 flex justify-center">
                <Image
                  src="/founder page/Group 1707483686.svg"
                  alt="Harsh - Founder"
                  width={618}
                  height={441}
                  className="w-full h-auto rounded-2xl max-w-full"
                />
              </div>
            </div>

            {/* Right Column - Founder Message Card */}
            <div className="lg:col-span-1 flex items-start">
              <Image
                src="/founder page/Group 1707483685.svg"
                alt="Founder Message"
                width={600}
                height={800}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px]"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

