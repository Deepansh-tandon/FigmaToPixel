import OurWorkButton from "./OurWorkButton";
import CardSlider from "./CardSlider";

export default function OurWorkSection() {
  return (
    <section className="w-full bg-[#F3F7F8] py-8 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Top section with button */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12 pt-5">
          <OurWorkButton text="Our Work" />
          <h2 className="text-center text-gray-900 px-4" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: 'clamp(22px, 5vw, 28px)',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            Every product here went from idea to live in 2 weeks
          </h2>
          <p className="text-center text-gray-600 px-4" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: 'clamp(14px, 3vw, 16px)',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            Built, launched, and loved by real users
          </p>
        </div>
        
        {/* Card slider */}
        <CardSlider />
      </div>
    </section>
  );
}

