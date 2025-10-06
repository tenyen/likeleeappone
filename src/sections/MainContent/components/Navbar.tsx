import { NavbarBrand } from "@/sections/MainContent/components/NavbarBrand";
import { NavbarLinks } from "@/sections/MainContent/components/NavbarLinks";
import { NavbarButtons } from "@/sections/MainContent/components/NavbarButtons";

export const Navbar = () => {
  return (
    <nav className="backdrop-blur bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] border-zinc-900/10 border-b border-solid">
      <div className="items-center box-border caret-transparent flex h-16 justify-between max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
        <NavbarBrand />
        <div className="flex items-center">
          <NavbarLinks />
          <NavbarButtons />
        </div>
      </div>
    </nav>
  );
};
