import { Navbar } from "@/sections/MainContent/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          <main className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
            <Hero />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
