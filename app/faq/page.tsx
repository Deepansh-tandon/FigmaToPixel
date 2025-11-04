import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";
import OurWorkButton from "../components/OurWorkButton";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] pt-15">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-[120px] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">
            {/* Left Column - FAQ Content */}
            <div className="lg:col-span-2">
              {/* Header Section */}
              <div className="mb-8">
                {/* FAQ Tag */}
                <div className="mb-4">
                  <OurWorkButton text="FAQ" />
                </div>

                {/* Main Heading */}
                <h1
                  className="mb-3"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '28px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                    color: 'rgba(32, 32, 32, 1)',
                  }}
                >
                  Got Questions? We&apos;ve Got Answers
                </h1>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                    color: 'rgba(82, 82, 82, 1)',
                  }}
                >
                  Simple explanations for your most important questions
                </p>
              </div>

              {/* FAQ Accordion */}
              <FAQAccordion />
            </div>

            {/* Right Column - CTA Card */}
            <div className="lg:col-span-1">
              <div className="lg:pt-[60px]">
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                  }}
                >
                    <div className="h-[100px]">

                    </div>
                <h2
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    color: 'rgba(100, 100, 100, 1)',
                    marginBottom: '2px',
                  }}
                >
                  Still not sure?
                </h2>
                <h3
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '40px',
                    letterSpacing: '0%',
                    color: 'rgba(0, 0, 0, 1)',
                    marginBottom: '8px',
                    marginTop: '-4px',


                  }}
                >
                  Book a free call.
                </h3>
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: 'rgba(50, 50, 50, 1)',
                    marginBottom: '24px',
                  }}
                >
                  Learn more about how we work and how we can help you and your startup.
                </p>
                <div className="bg-gradient-to-r from-[rgba(156,198,255,1)] to-[rgba(0,208,255,1)] p-[2px] rounded-full w-[50%]">
                  <button className="bg-gradient-to-b from-[#3B9DFF] to-[#1E6FFF] text-white px-6 py-3 rounded-full text-base font-semibold shadow-[0_8px_24px_rgba(59,157,255,0.4)] hover:shadow-[0_12px_32px_rgba(59,157,255,0.5)] transition-all w-full flex items-center justify-start gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Book A Call
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
<div className="h-[150px]">

</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

