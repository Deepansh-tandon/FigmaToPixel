import Nav from "../components/Nav";
import Footer from "../components/Footer";
import OurWorkButton from "../components/OurWorkButton";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-[120px] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="mb-12 text-center">
            {/* Pricing Tag */}
            <div className="mb-4 flex justify-center pt-[50px]">
              <OurWorkButton text="Pricing" />
            </div>

            {/* Main Heading */}
            <h1
              className="mb-3 text-xl md:text-2xl lg:text-[28px] px-4"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                lineHeight: '31px',
                letterSpacing: '0%',
                color: 'rgba(32, 32, 32, 1)',
              }}
            >
              Two ways to launch fast - and keep growing even faster
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm md:text-base lg:text-[16px] px-4"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                lineHeight: '31px',
                letterSpacing: '0%',
                color: 'rgba(82, 82, 82, 1)',
              }}
            >
              Choose the perfect package to launch and grow your startup
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-4 max-w-6xl mx-auto items-start px-4 md:px-12 lg:px-36 py-6 md:py-8 lg:py-10">
            {/* Left Card: Payment Box */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/boxes/Frame 667.svg"
                alt="Payment Box"
                width={500}
                height={800}
                className="w-full h-auto rounded-2xl object-contain"
              />
            </div>

            {/* Right Card: Aymen Box */}
            <div className="w-full max-w-md mx-auto lg:max-w-none lg:-mt-10">
              <Image
                src="/boxes/Group 1707483687.svg"
                alt="Aymen Box"
                width={600}
                height={1000}
                className="w-full h-auto rounded-2xl object-contain"
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

