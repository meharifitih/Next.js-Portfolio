import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-2- pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-20 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full items-center flex  justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="flex justify-center  relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concept into Seamless User Experience"
          />
          <p className="text-center md:tracking-widest mb-4 text-sm md:text-large lg:text-2xl">
            Hi, I&apos;m Mehari, Full Stack Developer based in Ethiopia
          </p>
          <a href="#about">
            <MagicButton title="Show my work" icon={<FaLocationArrow/>} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
