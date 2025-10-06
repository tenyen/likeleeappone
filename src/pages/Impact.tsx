import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const Impact = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Hero Section */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 left-10 w-24 h-24 border border-gray-300 opacity-30"></div>
            <div className="absolute top-20 right-10 w-20 h-20 border border-gray-300 opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Our Environmental Acknowledgement
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
                  At Likelee, art is our north star. Faces become stories, code becomes color, and every creative choice ripples far beyond the screen.
                </p>
              </div>
            </div>
          </section>

          {/* Why This Matters to Creatives */}
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                  <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                  Why This Matters to Creatives
                </h2>
                <div className="bg-white border-2 border-black p-8">
                  <p className="text-lg text-gray-700">
                    If you've ever spent hours perfecting light in a frame or choosing the right texture for a character, you know craft is inseparable from context. The same applies to technology: pixels are powered by energy, renders move through data centers, and each "export" has a quiet footprint. Acknowledging that link keeps our practice honest—and invites more thoughtful experimentation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Approach Impact */}
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4 justify-center">
                <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L11 18.5V19h1v-.07l6.79-6.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93v-2.07h-1v2.07zM17.93 11H19c0-4.08-3.05-7.44-7-7.93v2.07h-1V3.07c-3.95.49-7 3.85-7 7.93h1.07L12 5.5V5h1v.07l6.79 6.79z"/>
                </svg>
                How We Approach Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Intentional Infrastructure */}
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L11 18.5V19h1v-.07l6.79-6.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93v-2.07h-1v2.07zM17.93 11H19c0-4.08-3.05-7.44-7-7.93v2.07h-1V3.07c-3.95.49-7 3.85-7 7.93h1.07L12 5.5V5h1v.07l6.79 6.79z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Intentional Infrastructure</h3>
                  <p className="text-gray-600 text-lg">
                    We favor cloud regions and partners that publicly share their sustainability road maps, and we review those partnerships regularly. It's not a one-and-one checkbox; it's an evolving conversation as technology and standards improve.
                  </p>
                </div>

                {/* Efficiency as a Creative Constraint */}
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Efficiency as a Creative Constraint</h3>
                  <p className="text-gray-600 text-lg">
                    Just as a filmmaker might limit takes to preserve spontaneity, we look for model-tuning and workflow tweaks that reduce overhead while keeping visual fidelity. Often, these constraints spark the most inventive outcomes.
                  </p>
                </div>

                {/* Transparent Defaults */}
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Transparent Defaults</h3>
                  <p className="text-gray-600 text-lg">
                    Wherever practical, Likelee surfaces simple cues—think "eco-friendly mode" or gentle reminders when a project's settings lean resource-heavy. They're prompts, not mandates, because we trust artists to decide what best serves their vision.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Continuous Dialogue */}
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                  <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  Continuous Dialogue
                </h2>
                <div className="bg-white border-2 border-black p-8">
                  <p className="text-lg text-gray-700 mb-4">
                    Our roadmap is shaped in partnership with the community. We host quarterly roundtables with creators, sustainability advocates, and technologists to share insights and co-design features that balance ambition with responsibility.
                  </p>
                  <p className="text-lg text-cyan-400 font-semibold">
                    You're invited.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Won't Do */}
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  What We Won't Do
                </h2>
                <div className="bg-white border-2 border-black p-8">
                  <p className="text-lg text-gray-700">
                    We won't guilt-trip you, and we won't bury the reality of impact behind marketing gloss. Creativity thrives on clarity, not shame. That's why we speak plainly about trade-offs and invite feedback instead of locking in pledges that can't evolve with the craft.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Role */}
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                  <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8c-1.11 0-2.07.39-2.83 1.02L11 7.42V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-1.42l3.17-1.6C14.93 14.61 15.89 15 17 15c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                  </svg>
                  Your Role
                </h2>
                <div className="bg-white border-2 border-black p-8">
                  <p className="text-lg text-gray-700">
                    If you choose to upload your face, license imagery, or build campaigns on Likelee, you're part of an ecosystem that values both artistic freedom and ecological mindfulness. Simple steps—like opting for efficient render presets or batching jobs—can make a difference, but the choice remains yours. We're here to make sustainable options feel intuitive, not restrictive.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Looking Ahead */}
          <section className="bg-black text-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Looking Ahead
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                We see sustainability as an ongoing practice, much like refining a storyboard or iterating on a color grade. As AI capabilities grow, so will our responsibility to weigh impact against expression. We promise to keep listening, keep learning, and keep building tools that let creativity flourish without turning a blind eye to the planet that inspires it.
              </p>
              <hr className="border-white/20 my-12" />
              <p className="text-xl md:text-2xl font-bold text-cyan-400 mb-8">
                Create boldly, consciously, and in good company.
              </p>
              <p className="text-lg text-gray-300">
                If you have ideas, concerns, or just want to chat about greener workflows, our inbox—and our next community roundtable—are always open.
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};
