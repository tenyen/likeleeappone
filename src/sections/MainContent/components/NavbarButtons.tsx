import { useNavigate } from "react-router-dom";

export const NavbarButtons = () => {
  const navigate = useNavigate();
  
  return (
    <div className="items-center box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
      <button 
        onClick={() => navigate('/faces-waitlist')}
        className="text-sm font-medium items-center bg-white caret-transparent gap-x-1.5 flex shrink-0 h-8 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-1.5 text-nowrap border border-zinc-900/10 mr-3 px-3 py-0 rounded-lg border-solid hover:bg-gray-50 transition-colors"
      >
        Join Faces Waitlist
      </button>
      <button 
        onClick={() => navigate('/creator-waitlist')}
        className="text-sm font-medium items-center bg-white caret-transparent gap-x-1.5 flex shrink-0 h-8 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-1.5 text-nowrap border border-zinc-900/10 mr-3 px-3 py-0 rounded-lg border-solid hover:bg-gray-50 transition-colors"
      >
        Join Creator Waitlist
      </button>
      <button 
        onClick={() => navigate('/protection-waitlist')}
        className="text-sm font-medium items-center bg-orange-300 caret-transparent gap-x-1.5 flex shrink-0 h-8 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-1.5 text-nowrap px-3 py-0 rounded-lg hover:bg-orange-400 transition-colors"
      >
        Protect My Likeness
      </button>
    </div>
  );
};
