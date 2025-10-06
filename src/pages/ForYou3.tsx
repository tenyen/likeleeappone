import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const ForYou3 = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 min-h-[952px] min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Essay Content */}
          <section className="py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4">
              
              <p className="text-xl text-gray-800 leading-relaxed mb-8 italic">
                Because everyone deserves to be seen—and rewarded—on their own terms.
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why We Built Likelee
              </h1>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Most platforms decide who gets visibility. If the algorithm likes you, great; if not, you disappear. Likelee changes that. Here, every face is searchable, every request is by permission, and every approved use pays you fairly.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                What We Stand For
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Visibility for All.</strong> No follower minimums. Whether you're from Mound Bayou or Midtown, brands can find you the moment you upload.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Ownership, Always.</strong> Your face is personal property. You decide where it appears, for how long, and at what price.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Fair Pay, Zero Guesswork.</strong> Set your rate once; royalties track automatically. Every download, every replay—counted and paid.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Clear Tracking & Protection.</strong> A real-time dashboard shows who used your likeness, where, and why. Digital proof-of-rights backs you up if misuse happens off-platform.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                <strong>Friction-Free Control.</strong> Change your mind? Adjust a toggle. New haircut? Update your photos. Full control, no customer-support tickets required.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                How It Works
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Upload Three Photos.</strong> Front, left, right—enough for a verified profile.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Set Your Parameters.</strong> Choose allowed media types, regions, and price points.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                <strong>Approve & Earn.</strong> Review requests, tap "Approve," and watch royalties show up in your wallet.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Your Invitation
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                If you want a real shot at being discovered—and paid—for simply being you, reserve your profile today. Likelee makes sure every face gets a fair chance to be seen, valued, and protected.
              </p>

              <p className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold">
                Your Face. Your Rules. Your Revenue.
              </p>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('/sign-up')}
                  className="text-lg font-semibold bg-cyan-400 text-white px-8 py-4 border-2 border-black hover:bg-cyan-500 transition-colors"
                >
                  Reserve Your Profile →
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
