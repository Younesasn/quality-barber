import Link from "next/link";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight, HeartHandshake } from "lucide-react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Salon agréable et barbers accueillants, coupe de qualité. Je recommandes !",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Super taille de barbe et coupe et masque de soins. Au top !",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Rien à dire la coupe est belle je vais revenir. Et super accueil.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Super ambiance avec un travail irréprochable et un salon soigné. Si vous souhaitez joindre l'utile à l'agréable je recommandes à 100% ! 🔥",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "L'équipe est accueillante et professionnelle. Mon barber a parfaitement compris ce que je voulais et le résultat est impeccable !",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Très accueillant ils coupent tous très bien je vous le conseille",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function CallToAction() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4">
          <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="absolute rotate-[35deg]">
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="z-10 mx-auto size-24 rounded-[2rem] border p-3 shadow-2xl backdrop-blur-md bg-black/10 lg:size-32">
              <HeartHandshake className="mx-auto size-16 text-white lg:size-24" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-white">
              <h1 className="text-3xl font-bold lg:text-4xl">Satisfait ?</h1>
              <p className="mt-2">
                Ne tardez plus et prenez votre rendez-vous !
              </p>
              <Link
                href="https://www.planity.com/quality-barber-59430-dunkerque"
                target="_blank"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group mt-4 rounded-[2rem] px-6"
                )}
              >
                Planity
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70% to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
