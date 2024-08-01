import { Avatars } from "./Avatars";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
  { text: "Contact", url: "#" },
];

export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto flex flex-col gap-y-5 rounded-lg px-6 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <img
            className="w-8 h-8 rounded-full"
            src="/images/qlt.jpg"
            alt="Quality Barber Logo"
          />
          <h2 className="font-bold text-white">Quality Barber</h2>
        </div>

        <div className="flex gap-x-2">
          <Avatars />
        </div>
      </div>
      <div className="flex justify-between gap-y-5 flex-row items-center">
        <div className="">
          <p className="font-medium tracking-tight text-neutral-400">
            Quality Barber
          </p>
          <p className="text-sm font-medium tracking-tight text-neutral-400">
            17 rue Jean Jaurès
          </p>
          <p className="text-sm font-medium tracking-tight text-neutral-400">
            59140 Dunkerque
          </p>
        </div>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-neutral-400">
          <p>Developed by <a href="https://you-dev.fr">You Dev</a></p>
        </div>
      </div>
    </footer>
  );
}
