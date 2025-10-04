import { HeroHeader } from "@/sections/Hero/components/HeroHeader";
import { WaitlistCards } from "@/sections/Hero/components/WaitlistCards";
import { FilmStrip } from "@/components/FilmStrip";
import { WavyLines } from "@/components/WavyLines";

export const Hero = () => {
  return (
    <section className="bg-[linear-gradient(oklab(0.979073_0.0000444055_0.0000195503_/_0.3)_0%,rgb(255,255,255)_50%,oklab(0.839909_-0.141908_-0.0158958_/_0.05)_100%)] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24 relative overflow-hidden">
      <WavyLines />
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl relative z-10">
        <div className="box-border caret-transparent max-w-screen-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
          <HeroHeader />
        </div>
      </div>
      <div className="relative z-10">
        <FilmStrip />
      </div>
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl relative z-10">
        <div className="box-border caret-transparent max-w-screen-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
          <WaitlistCards />
        </div>
      </div>
    </section>
  );
};
