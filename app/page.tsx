import Image from "next/image";
import Nav from "./components/Nav";
import LogoSlider from "./components/LogoSlider";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full h-[90px] flex items-center flex-shrink-0 z-50 bg-[var(--background)]">
        <Nav />
      </div>
      <div className="flex-1 flex flex-col justify-center pt-[90px]">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[1440px]">
            <Image
              src="/heroo.svg"
              alt="Hero"
              width={2000}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="pb-8 flex flex-col items-center ">
                  <div className="flex justify-center w-[90vh]">
            <LogoSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
