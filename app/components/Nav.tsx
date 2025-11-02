import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full mx-auto px-[80px] py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/Logo.svg"
          alt="LaunchPad Labs"
          width={49}
          height={49}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Links + CTA Button */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-10 font-[family-name:var(--font-plus-jakarta-sans)] text-[15px] font-semibold leading-[100%] tracking-[0%]">
          <li className="cursor-pointer  transition-colors">
            How It Works
          </li>
          <li className="cursor-pointer  transition-colors">
            Our Work
          </li>
          <li className="cursor-pointer      transition-colors">
            Our Process
          </li>
          <li className="cursor-pointer  transition-colors">
            Founder
          </li>
          <li className="cursor-pointer  transition-colors">
            Pricing
          </li>
        </ul>

        <div className="bg-gradient-to-r from-[rgba(156,198,255,1)] to-[rgba(0,208,255,1)] p-[2px] rounded-full">
          <button className="bg-gradient-to-b from-[#3B9DFF] to-[#1E6FFF] text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_8px_24px_rgba(59,157,255,0.4)] hover:shadow-[0_12px_32px_rgba(59,157,255,0.5)] transition-all w-full">
            Book A Call
          </button>
        </div>
      </div>
    </nav>
  );
}