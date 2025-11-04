import Image from "next/image";

export default function BookingSection() {
  return (
    <section className="w-full bg-white pt-8 md:pt-16 pb-0">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Top section with heading and CTA */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <h2 className="text-center text-gray-900" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '40px',
            letterSpacing: '0%',
          }}>
            Ready to launch your next big idea?
          </h2>
          <p className="text-center text-gray-600 px-4 max-w-2xl mt-[-20px]" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            Book a consultation call and let&apos;s turn your vision into reality.
          </p>
          <div className="bg-gradient-to-r from-[rgba(156,198,255,1)] to-[rgba(0,208,255,1)] p-[2px] rounded-full">
            <button className="bg-gradient-to-b from-[#3B9DFF] to-[#1E6FFF] text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_8px_24px_rgba(59,157,255,0.4)] hover:shadow-[0_12px_32px_rgba(59,157,255,0.5)] transition-all w-full">
              Book My Free MVP Call
            </button>
          </div>
        </div>
      </div>
      
      {/* Booking interface - white background container */}
      <div className="flex justify-center px-4 md:px-8">
        <div className="bg-white rounded-2xl overflow-hidden">
          <Image
            src="/boxes/Group 1707483682.svg"
            alt="Booking"
            width={1597}
            height={789}
            className="w-full  object-contain"
          />
        </div>
      </div>
    </section>
  );
}

