import OurWorkButton from "./OurWorkButton";
import Image from "next/image";

export default function LaunchPadProcessSection() {
  return (
    <section className="w-full bg-white py-8 md:py-16 ">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Top section with button */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12 pt-6">
          <OurWorkButton text="Our Process" />
          <h2 className="text-center text-gray-900 px-4" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            The LaunchPad Process
          </h2>
          <p className="text-center text-gray-600 px-4 max-w-3xl" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            A transparent, founder-friendly journey from idea to live MVP in just <strong style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '31px',
              letterSpacing: '0%',
            }}>2 weeks</strong>.
          </p>
        </div>
        
        {/* Three cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto justify-items-center">
          {/* Card 1 */}
          <div className="bg-white w-full max-w-[340px] md:w-[360px] h-[380px] md:h-[418px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-shrink-0 relative z-10" 
               style={{ boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center justify-center p-2 flex-1 relative">
              <Image src="/boxes/Group 1707483672.svg" alt="Card 1" width={346} height={404} className="w-full h-full object-contain relative z-10" style={{ filter: 'drop-shadow(0 2px 21px rgba(0, 0, 0, 0.05))' }} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-full max-w-[340px] md:w-[360px] h-[380px] md:h-[418px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-shrink-0 relative z-10" 
               style={{ boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center justify-center p-2 flex-1 relative">
              <Image src="/boxes/Group 1707483673.svg" alt="Card 2" width={346} height={404} className="w-full h-full object-contain relative z-10" style={{ filter: 'drop-shadow(0 2px 21px rgba(0, 0, 0, 0.05))' }} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white w-full max-w-[340px] md:w-[360px] h-[380px] md:h-[418px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-shrink-0 relative z-10" 
               style={{ boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center justify-center p-2 flex-1 relative">
              <Image src="/boxes/Group 1707483674.svg" alt="Card 3" width={346} height={404} className="w-full h-full object-contain relative z-10" style={{ filter: 'drop-shadow(0 2px 21px rgba(0, 0, 0, 0.05))' }} />
            </div>
          </div>
        </div>

        {/* Two larger cards grid */}
        <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto justify-items-center">
          {/* Card 4 */}
          <div className="bg-white w-full max-w-[340px] sm:max-w-[420px] md:w-[565px] h-[380px] md:h-[418px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-shrink-0 relative z-10" 
               style={{ boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center justify-center p-2 flex-1 relative">
              <Image src="/boxes/Group 1707483676.svg" alt="Card 4" width={551} height={404} className="w-full h-full object-contain relative z-10" style={{ filter: 'drop-shadow(0 2px 21px rgba(0, 0, 0, 0.05))' }} />
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white w-full max-w-[340px] sm:max-w-[420px] md:w-[565px] h-[380px] md:h-[418px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-shrink-0 relative z-10" 
               style={{ boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center justify-center p-2 flex-1 relative">
              <Image src="/boxes/Group 1707483677.svg" alt="Card 5" width={551} height={404} className="w-full h-full object-contain relative z-10" style={{ filter: 'drop-shadow(0 2px 21px rgba(0, 0, 0, 0.05))' }} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

