import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/sections/MainContent/components/Navbar";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to the Likelee Ecosystem.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Changed from 50ms to 100ms (2x slower)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] relative overflow-hidden">
          
          {/* Animated Sketches Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Styles for animations */}
            <style>{`
              @keyframes draw {
                to { stroke-dashoffset: 0; }
              }
              @keyframes move-left-to-right {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(150vw); }
              }
              @keyframes move-right-to-left {
                0% { transform: translateX(150vw); }
                100% { transform: translateX(-100%); }
              }
              @keyframes float-vertical {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>

            {/* Wavy Lines */}
            {[
              { color: 'text-cyan-400', delay: '0.5s', duration: '25s', floatDelay: '0s', floatDuration: '4s', path: 'M5,15 Q15,5 25,15 T45,15 T65,15', size: 'w-20 h-8', top: '12', left: '8', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '1s', duration: '28s', floatDelay: '0.5s', floatDuration: '5s', path: 'M10,15 Q20,8 30,15 T50,15 T70,15 T90,15', size: 'w-24 h-10', top: '16', right: '12', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '1.5s', duration: '22s', floatDelay: '1s', floatDuration: '4.5s', path: 'M10,20 Q20,10 30,20 T50,20 T70,20', size: 'w-18 h-12', top: '1/4', left: '6', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '2s', duration: '30s', floatDelay: '1.5s', floatDuration: '5.5s', path: 'M10,15 Q25,8 40,15 T70,15 T90,15', size: 'w-22 h-10', top: '1/3', right: '10', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.5s', duration: '26s', floatDelay: '2s', floatDuration: '4s', path: 'M10,15 Q20,10 30,15 T50,15 T70,15', size: 'w-20 h-8', top: '1/2', left: '10', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '3s', duration: '29s', floatDelay: '2.5s', floatDuration: '5s', path: 'M10,15 Q22,7 34,15 T58,15 T82,15', size: 'w-24 h-10', top: '1/2', right: '14', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '3.5s', duration: '23s', floatDelay: '3s', floatDuration: '4.5s', path: 'M10,15 Q25,10 40,15 T70,15 T90,15', size: 'w-22 h-10', bottom: '24', left: '12', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '4s', duration: '27s', floatDelay: '3.5s', floatDuration: '5.5s', path: 'M10,15 Q20,8 30,15 T50,15 T70,15', size: 'w-20 h-8', bottom: '28', right: '16', move: 'move-right-to-left' },
            ].map((line, i) => (
              <svg key={`wavy-${i}`} className={`absolute opacity-25 ${line.size} ${line.color}`} style={{
                top: line.top, left: line.left, right: line.right, bottom: line.bottom,
                animation: `draw 2s ease-out ${line.delay} forwards, ${line.move} ${line.duration} linear infinite ${line.delay}, float-vertical ${line.floatDuration} ease-in-out infinite alternate ${line.floatDelay}`
              }} viewBox="0 0 100 30">
                <path d={line.path} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150" />
              </svg>
            ))}

            {/* Stars */}
            {[
              { color: 'text-cyan-400', delay: '0.8s', duration: '30s', floatDelay: '0.3s', floatDuration: '4s', size: 'w-6 h-6', top: '10', left: '1/4', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '1.3s', duration: '27s', floatDelay: '0.8s', floatDuration: '5s', size: 'w-7 h-7', top: '15', right: '1/4', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '1.8s', duration: '32s', floatDelay: '1.3s', floatDuration: '4.5s', size: 'w-8 h-8', top: '1/3', left: '1/3', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '2.3s', duration: '29s', floatDelay: '1.8s', floatDuration: '5.5s', size: 'w-6 h-6', top: '1/3', right: '1/3', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.8s', duration: '31s', floatDelay: '2.3s', floatDuration: '4s', size: 'w-7 h-7', bottom: '1/4', left: '1/4', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '3.3s', duration: '26s', floatDelay: '2.8s', floatDuration: '5s', size: 'w-8 h-8', bottom: '1/4', right: '1/4', move: 'move-right-to-left' },
            ].map((star, i) => (
              <svg key={`star-${i}`} className={`absolute opacity-25 ${star.size} ${star.color}`} style={{
                top: star.top, left: star.left, right: star.right, bottom: star.bottom,
                animation: `draw 2s ease-out ${star.delay} forwards, ${star.move} ${star.duration} linear infinite ${star.delay}, float-vertical ${star.floatDuration} ease-in-out infinite alternate ${star.floatDelay}`
              }} viewBox="0 0 100 100">
                <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ))}

            {/* Abstract Butterflies */}
            {[
              { color: 'text-yellow-400', delay: '1.1s', duration: '26s', floatDelay: '0.6s', floatDuration: '4.5s', size: 'w-8 h-8', top: '20', left: '20', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '1.6s', duration: '29s', floatDelay: '1.1s', floatDuration: '5.2s', size: 'w-9 h-9', top: '25', right: '25', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.1s', duration: '24s', floatDelay: '1.6s', floatDuration: '4.8s', size: 'w-8 h-8', bottom: '20', left: '20', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '2.6s', duration: '30s', floatDelay: '2.1s', floatDuration: '5.8s', size: 'w-9 h-9', bottom: '25', right: '25', move: 'move-right-to-left' },
            ].map((butterfly, i) => (
              <svg key={`butterfly-${i}`} className={`absolute opacity-25 ${butterfly.size} ${butterfly.color}`} style={{
                top: butterfly.top, left: butterfly.left, right: butterfly.right, bottom: butterfly.bottom,
                animation: `draw 2s ease-out ${butterfly.delay} forwards, ${butterfly.move} ${butterfly.duration} linear infinite ${butterfly.delay}, float-vertical ${butterfly.floatDuration} ease-in-out infinite alternate ${butterfly.floatDelay}`
              }} viewBox="0 0 100 100">
                <path d="M30,50 Q50,20 70,50 M30,50 Q50,80 70,50" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            ))}
          </div>

          <style>{`
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          <Navbar />
          <main className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] flex items-center justify-center min-h-[calc(100vh-200px)] relative z-10">
            <div className="max-w-5xl mx-auto px-4 text-center">
              
              {/* Main Heading with Typing Effect */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight min-h-[4.5rem]">
                {typedText}
                {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
              </h1>
              
              {/* Sub-line */}
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                Join a growing network that connects real people with AI creators and studios.
              </p>

              {/* Visual - Ecosystem Icon Animation Placeholder */}
              <div className="mb-12 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Central Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-lg">
                      <img
                        src="https://c.animaapp.com/mg4iljce82GyUu/img/chatgpt-image-sep-25-2025-09_54_14-pm.png"
                        alt="Likelee Logo"
                        className="w-12 h-12"
                      />
                    </div>
                  </div>

                  {/* Orbiting Icons - Face (Top) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-pulse">
                    <div className="w-16 h-16 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Orbiting Icons - Creator (Bottom Left) */}
                  <div className="absolute bottom-0 left-8 animate-pulse" style={{ animationDelay: '0.3s' }}>
                    <div className="w-16 h-16 bg-red-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Orbiting Icons - Studio (Bottom Right) */}
                  <div className="absolute bottom-0 right-8 animate-pulse" style={{ animationDelay: '0.6s' }}>
                    <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 256 256">
                    <line x1="128" y1="128" x2="128" y2="32" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                    <line x1="128" y1="128" x2="64" y2="224" stroke="currentColor" strokeWidth="2" className="text-red-400" />
                    <line x1="128" y1="128" x2="192" y2="224" stroke="currentColor" strokeWidth="2" className="text-yellow-400" />
                  </svg>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => navigate('/faces')}
                  className="text-xl font-semibold bg-cyan-400 text-white px-12 py-6 border-2 border-black hover:bg-cyan-500 transition-colors w-full md:w-auto"
                >
                  I'm a Face
                </button>
                <button 
                  onClick={() => navigate('/ai-creators')}
                  className="text-xl font-semibold bg-red-400 text-white px-12 py-6 border-2 border-black hover:bg-red-500 transition-colors w-full md:w-auto"
                >
                  I'm an A.I. Creator
                </button>
                <button 
                  onClick={() => navigate('/brands-studios')}
                  className="text-xl font-semibold bg-yellow-400 text-black px-12 py-6 border-2 border-black hover:bg-yellow-500 transition-colors w-full md:w-auto"
                >
                  I'm a Brand/Studio
                </button>
              </div>

            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
