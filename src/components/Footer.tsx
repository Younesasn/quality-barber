import {
    InstagramLogoIcon,
  } from "@radix-ui/react-icons";
import { Avatars } from "./Avatars";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <InstagramLogoIcon />, url: "https://www.instagram.com/qlt.barber/" },
];

export function Footer() {
  return (
    <footer className="px-5 lg:px-10 p-5 max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-5 md:flex-row items-start md:items-center justify-between w-full gap-x-5">
        <div className="flex items-center gap-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://magicui.design/icon.png"
            alt="Quality Barber Logo"
          />
           <h2 className="font-bold text-white">
              Quality Barber
            </h2>
        </div>
        <div className="flex items-center gap-x-4">
          <Avatars />
        </div>
      </div>
    </footer>
  );
}
