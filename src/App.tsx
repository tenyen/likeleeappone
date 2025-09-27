import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContent } from "@/sections/MainContent";
import { FacesWaitlist } from "@/pages/FacesWaitlist";
import { CreatorWaitlist } from "@/pages/CreatorWaitlist";
import { ProtectionWaitlist } from "@/pages/ProtectionWaitlist";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

export const App = () => {
  return (
    <Router>
      <body className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-left indent-[0px] normal-case visible border-separate font-ui_sans_serif">
        <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <div className="box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/faces-waitlist" element={<FacesWaitlist />} />
              <Route path="/creator-waitlist" element={<CreatorWaitlist />} />
              <Route path="/protection-waitlist" element={<ProtectionWaitlist />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </div>
      </body>
    </Router>
  );
};
