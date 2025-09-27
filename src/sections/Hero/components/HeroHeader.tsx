import { RotatingHeadline } from "@/components/RotatingHeadline";

export const HeroHeader = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
      <span className="text-xs font-medium items-center bg-black text-white box-border caret-transparent gap-x-1 inline-flex shrink-0 justify-center leading-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden mb-6 mx-auto px-2 py-0.5 rounded-lg border-solid border-transparent">
        <img
          src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent h-3 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-3 mr-1"
        />
        Early Access • Limited Spots
      </span>
      
      <RotatingHeadline />
      
      <p className="text-neutral-500 text-xl box-border caret-transparent leading-7 max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
        Likelee is here to protect your face in the age of AI. Always free.
        <span className="text-zinc-900 font-medium box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          {" "}
          Explore waitlist options below.
        </span>
      </p>
    </div>
  );
};
