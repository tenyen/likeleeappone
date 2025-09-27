import { WaitlistCard } from "@/sections/Hero/components/WaitlistCard";
import { useNavigate } from "react-router-dom";

export const WaitlistCards = () => {
  const navigate = useNavigate();
  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 mb-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <WaitlistCard
        cardVariant="bg-white border-zinc-900/10"
        iconSrc="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-5.svg"
        iconVariant="bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)]"
        title="Faces Waitlist"
        subtitle="For everyday people"
        description="License your facial likeness to directors, filmmakers, and brands. Earn royalties from your unique look."
        features={[
          "Work with your favorite brands",
					"Earn passive income",
          "Set your own usage terms",
          "Grow your social media presence",
          "Get global exposure opportunities",
          "Network with creators",
        ]}
        featureIconVariant="bg-cyan-400"
        badgeIconSrc=""
        badgeText=""
        priceText="Free to join"
        footerVariant="border-zinc-900/10"
        showTopIcon={false}
        onClick={() => navigate('/faces-waitlist')}
      />
      <WaitlistCard
        cardVariant="bg-white border-zinc-900/10"
        iconSrc="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-10.svg"
        iconVariant="bg-[oklab(0.890537_0.003488_0.133287_/_0.1)]"
        title="Protect My Likeness"
        subtitle="For rights protection"
        description="Claim your likeness and ensure it cannot be used without permission. Control without licensing — just protection."
        features={[
          "Secure Your Digital Identity",
          "Receive Verified Ownership Log",
          "Track potential misuse",
          "Peace of mind in AI era",
          "Control without licensing",
          "Forever free protection",
        ]}
        featureIconVariant="bg-orange-300"
        badgeIconSrc=""
        badgeText=""
        priceText="Free protection"
        footerVariant="border-[oklab(0.890537_0.003488_0.133287_/_0.1)]"
        showTopIcon={false}
        onClick={() => navigate('/protection-waitlist')}
      />
      <WaitlistCard
        cardVariant="bg-white border-zinc-900/10"
        iconSrc="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-8.svg"
        iconVariant="bg-[oklab(0.711593_0.167053_0.0703646_/_0.1)]"
        title="Creator Waitlist"
        subtitle="For directors & brands"
        description="Find and license authentic faces for your creative projects. Access diverse talent from our community."
        features={[
          "Browse diverse talent pool",
          "Speedrun high-touch campaigns",
          "Build your portfolio & get clients",
          "Secure licensing agreements",
          "Project management tools",
          "Rights protection & compliance",
        ]}
        featureIconVariant="bg-red-400"
        badgeIconSrc=""
        badgeText=""
        priceText="Early access"
        footerVariant="border-[oklab(0.711593_0.167053_0.0703646_/_0.1)]"
        showTopIcon={false}
        onClick={() => navigate('/creator-waitlist')}
      />
    </div>
  );
};
