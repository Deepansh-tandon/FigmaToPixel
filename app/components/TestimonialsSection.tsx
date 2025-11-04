import OurWorkButton from "./OurWorkButton";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      text: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    },
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      text: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    },
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      text: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    },
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      text: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    },
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      text: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    },
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      text: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Two-column layout: Video card on left, Testimonial sliders on right */}
        <div className="flex justify-center pb-8">
              <OurWorkButton text="Testimonials" />
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {/* Left: Video Card */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-left text-gray-900 mb-6" style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '40px',
              letterSpacing: '0%',
              color: 'rgba(32, 32, 32, 1)'
            }}>
              What Founders Are Saying About
              <br />
              LaunchPad Labs
            </h2>
            <div className="relative w-full max-w-[400px]">
              <Image src="/Group 1362.svg" alt="Video testimonial" width={400} height={350} className="w-full h-auto" />
            </div>
          </div>

          {/* Right: Two Testimonial Sliders side by side */}
          <div className="flex flex-col gap-4">
            {/* Testimonials button at top right */}
           
            
            {/* Two sliders side by side */}
            <div className="flex gap-4">
              {/* First slider - top to bottom */}
              <div className="relative w-1/2 h-[700px] overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-testimonials-vertical">
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <div
                      key={`first-${i}`}
                      className="rounded-2xl bg-white p-6 shadow-sm flex-shrink-0 relative"
                      style={{ boxShadow: '0 2px 21px 0 rgba(0, 0, 0, 0.05)' }}
                    >
                      {/* Dashed border using SVG */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="16" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 4" />
                      </svg>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 flex items-center gap-1" style={{
                            fontFamily: 'Plus Jakarta Sans',
                          }}>
                            {t.name}
                            <span className="text-blue-500 text-sm">✔</span>
                          </h3>
                          <p className="text-sm text-gray-500" style={{
                            fontFamily: 'Plus Jakarta Sans',
                          }}>{t.role}</p>
                        </div>
                      </div>
                      <p className="italic text-gray-700 text-sm mb-3" style={{
                        fontFamily: 'Plus Jakarta Sans',
                      }}>
                        "{t.text}"
                      </p>
                      <div className="text-amber-400 text-lg">★★★★★</div>
                    </div>
                  ))}
                </div>
                
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Second slider - bottom to top */}
              <div className="relative w-1/2 h-[750px] overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-testimonials-vertical-reverse">
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <div
                      key={`second-${i}`}
                      className="rounded-2xl bg-white p-6 shadow-sm flex-shrink-0 relative"
                      style={{ boxShadow: '0 2px 21px 0 rgba(0, 0, 0, 0.05)' }}
                    >
                      {/* Dashed border using SVG */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="16" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 4" />
                      </svg>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 flex items-center gap-1" style={{
                            fontFamily: 'Plus Jakarta Sans',
                          }}>
                            {t.name}
                            <span className="text-blue-500 text-sm">✔</span>
                          </h3>
                          <p className="text-sm text-gray-500" style={{
                            fontFamily: 'Plus Jakarta Sans',
                          }}>{t.role}</p>
                        </div>
                      </div>
                      <p className="italic text-gray-700 text-sm mb-3" style={{
                        fontFamily: 'Plus Jakarta Sans',
                      }}>
                        "{t.text}"
                      </p>
                      <div className="text-amber-400 text-lg">★★★★★</div>
                    </div>
                  ))}
                </div>
                
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
