import Image from "next/image";
import LogoSlider from "./LogoSlider";

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col justify-center pt-[90px] ">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[1440px] px-4 md:px-8">
          <Image
            src="/heroo.svg"
            alt="Hero"
            width={2000}
            height={700}
            className="w-full h-[200px] md:h-auto object-contain"
          />
        </div>
      </div>
      <div className="pb-8 flex flex-col items-center ">
        <div className="flex justify-center w-full px-4 md:w-[90vh]">
          <LogoSlider />
        </div>
      </div>
    </div>
  );
}

