import Image from "next/image";

export default function LogoSlider() {
  const logos = [
    { name: "Qualcomm", src: "/Untitled (2)/Qualcomm-Logo 1.svg", width: 120, height: 40 },
    { name: "Walmart", src: "/Untitled (2)/Walmart_logo_(2008) 1.svg", width: 120, height: 40 },
    { name: "Amazon", src: "/Untitled (2)/Amazon_logo 1.svg", width: 120, height: 40 },
    { name: "Adobe", src: "/Untitled (2)/Adobe_Corporate_logo 1.svg", width: 120, height: 40 },
    { name: "Deloitte", src: "/Untitled (2)/Deloitte_old_blue_logo 1.svg", width: 120, height: 40 },
  ];

  return (
    <div className="w-full overflow-hidden bg-transparent py-4 md:py-8">
      <div className="flex justify-center">
        <div className="inline-flex animate-scroll-infinite gap-8 md:gap-16 items-center">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 opacity-30 px-4 md:px-8"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain w-16 h-auto md:w-[120px]"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 opacity-30 px-4 md:px-8"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain w-16 h-auto md:w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

