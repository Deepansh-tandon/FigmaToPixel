import Image from "next/image";
import OurWorkButton from "./OurWorkButton";

export default function ImpactSection() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Top section with button */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <OurWorkButton text="Our Impact" />
          <h2 className="text-center text-gray-900 text-lg md:text-2xl" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: 'clamp(20px, 4vw, 24px)',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            Fast launches Real results
          </h2>
        </div>
        
        {/* Box image */}
        <div className="w-full flex justify-center overflow-hidden">
          <Image
            src="/Frame 630.svg"
            alt="Impact metrics"
            width={966}
            height={246}
            className="w-full max-w-[966px] h-auto object-contain scale-75 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
}

