import OurWorkButton from "./OurWorkButton";

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
            fontSize: 'clamp(22px, 5vw, 28px)',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            Why founders launch faster with LaunchPad labs
          </h2>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto mb-8 md:mb-12">

          <div className="border-2 border-dashed border-red-300 rounded-2xl p-6 md:p-8 ">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-full inline-block">
                Traditional Development
              </span>
            </div>
            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4L12 12M12 4L4 12" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LaunchPad Labs Approach */}
          <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-full inline-block">
                LaunchPad Labs Approach
              </span>
            </div>
            <ul className="space-y-4">
              {labItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L6 11L13 4" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 text-base">{item}</span>
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

