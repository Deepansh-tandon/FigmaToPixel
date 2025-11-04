import OurWorkButton from "./OurWorkButton";
import Image from "next/image";

export default function OurApproachSection() {
  const traditionalItems = [
    "Months of Planning",
    "Too Many Cooks",
    "Design-Then-Build Bottlenecks",
    "Huge Upfront Fees",
    "Complex Tech Steup"
  ];

  const labItems = [
    "2-Week Launch System",
    "Focused Founder-Led Pods",
    "Real-Time Prototyping",
    "Flat $4,997 Transparent Pricing",
    "Modern, Scalable Stack"
  ];

  return (
    <section className="w-full bg-[#F3F7F8] py-8 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Top section with button */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <OurWorkButton text="Our Approach" />
          <h2 className="text-center text-gray-900 px-4" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '38px',
            letterSpacing: '0%',
          }}>
            Why founders launch faster with LaunchPad labs
          </h2>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto mb-8 md:mb-12 justify-items-center">

          <div className="rounded-2xl p-6 md:p-8 w-full max-w-[458px] relative">
            {/* Custom dashed border */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full" style={{ overflow: 'visible' }}>
              <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="16" fill="none" stroke="#FCA5A5" strokeWidth="2" strokeDasharray="15 10" />
            </svg>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full inline-block bg-white" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <span className="text-gray-900 px-6 py-1 inline-block" style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '31px',
                  letterSpacing: '0%',
                }}>
                  Traditional Development
                </span>
              </div>
            </div>
            <ul className="space-y-[3.2px]">
              {traditionalItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Image src="/logos/Frame 644.svg" alt="tick" width={57} height={54} className="flex-shrink-0 mt-[-2px]" />
                  <span className="text-gray-900 pt-[5px]" style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 650,
                    fontSize: '16px',
                    lineHeight: '31px',
                    letterSpacing: '0%',
                  }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LaunchPad Labs Approach */}
          <div className="rounded-2xl p-6 md:p-8 w-full max-w-[458px] relative">
            {/* Custom dashed border */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full" style={{ overflow: 'visible' }}>
              <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="16" fill="none" stroke="#86EFAC" strokeWidth="2" strokeDasharray="15 10" />
            </svg>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full inline-block bg-white" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <span className="text-gray-900 px-6 py-1 inline-block" style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '31px',
                  letterSpacing: '0%',
                }}>
                  LaunchPad Labs Approach
                </span>
              </div>
            </div>
            <ul className="space-y-[3.2px]">
              {labItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Image src="/logos/Frame 644 (1).svg" alt="cross" width={57} height={54} className="flex-shrink-0 mt-[-2px]" />
                  <span className="text-gray-900 pt-[5px]" style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 650,
                    fontSize: '16px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                  }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[rgba(156,198,255,1)] to-[rgba(0,208,255,1)] p-[2px] rounded-full">
            <button className="bg-gradient-to-b from-[#3B9DFF] to-[#1E6FFF] text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_8px_24px_rgba(59,157,255,0.4)] hover:shadow-[0_12px_32px_rgba(59,157,255,0.5)] transition-all w-full">
              Book My Free MVP Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

