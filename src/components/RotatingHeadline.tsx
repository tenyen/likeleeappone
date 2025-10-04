import { useState, useEffect } from "react";

const headlines = [
  "Rent your face from your bedroom. Set your price, or earn ongoing royalties.",
  "Choose how your face gets used and protect your likeness.",
  "Creators: access real, human faces for your AI Driven projects."
];

const gradients = [
  "bg-gradient-to-r from-[#5CE1E6] via-[#5CE1E6] to-[#4FD1C7]", // Teal gradient
  "bg-gradient-to-r from-[#FF6B6B] via-[#FF6B6B] to-[#FF5252]", // Coral gradient
  "bg-gradient-to-r from-[#FFC94D] via-[#FFC94D] to-[#FFB74D]"  // Amber gradient
];

export const RotatingHeadline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState(headlines[0]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If user prefers reduced motion, don't animate
      return;
    }

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % headlines.length;
        setDisplayText(headlines[nextIndex]);
        setCurrentIndex(nextIndex);
        setIsVisible(true);
      }, 400); // Slightly longer fade out time
    }, 3500); // 3.5 seconds display time

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-8">
      <h1 
        className={`text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] max-w-4xl mx-auto px-4 bg-clip-text text-transparent transition-opacity duration-500 ease-in-out md:text-3xl md:leading-10 motion-reduce:transition-none ${gradients[currentIndex]} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {displayText}
      </h1>
    </div>
  );
};
