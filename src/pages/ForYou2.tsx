import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const ForYou2 = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 min-h-[952px] min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Essay Content */}
          <section className="py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4">
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Brands & Studios Manifesto
              </h1>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Build campaigns at the speed of AI—without cutting creative corners.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                What's Changed
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Auditions happen in a prompt window.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Post-production is a slider, not a reshoot.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Yesterday's storyboards are today's deliverables.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                AI has flattened the production timeline, but it hasn't solved the hard parts: finding real faces, hiring AI-literate creators, and locking iron-clad rights—all before your launch tweet goes live.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Six Standards We Run On
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Authenticity on Demand.</strong> Any demographic, any vibe, already cleared. Real people give your generative scenes a human heartbeat.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Creators Fluent in Machine & Muse.</strong> Directors who can prompt, composite, and deliver a finished asset that still feels handcrafted.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Licensing That Ships with the File.</strong> Every download carries a cryptographic proof-of-rights. Share it with Legal once and move on.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Budgets That Don't Balloon.</strong> Transparent pricing sliders show upfront fees and projected royalties-per-impression. No post-campaign "gotchas."
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Data You Can Defend.</strong> Usage logs, region splits, and talent payments live in a single dashboard—easy to screenshot, even easier to audit.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                <strong>Creative Velocity without Burnout.</strong> Brief at 9 AM, talent locked by noon, first cut in review before end-of-day—all while your team keeps its weekends.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Ready to Produce at AI Pace?
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Join the next cohort of 50 partner brands getting first access to Likelee's verified faces and AI-native creators.
              </p>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('/brands-studios-sign-up')}
                  className="text-lg font-semibold bg-yellow-400 text-black px-8 py-4 border-2 border-black hover:bg-yellow-500 transition-colors"
                >
                  Get Access →
                </button>
              </div>

            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};
