"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Quality Barber",
    description:
      "Un salon de coiffure innovant et dynamique, vous accueille chaleureusement à Dunkerque. Avec une équipe de deux coiffeurs talentueux, nous vous offrons des prestations de qualité pour vous assurer une coupe de cheveux impeccable.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/desc-1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Notre ambiance amicale et conviviale vous mettra rapidement à l'aise, où vous pourrez passer un moment agréable en discutant avec notre équipe passionnée. La décoration urbaine et moderne du salon crée une atmosphère unique, propice à la détente et à la confiance",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/desc-2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Venez découvrir l'expérience Quality Barber, où vous serez entre de bonnes mains. Réservez dès maintenant votre rendez-vous dans notre salon de coiffure à Dunkerque et laissez-nous sublimer votre style.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/desc-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Description() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <StickyScroll content={content} />
    </section>
  );
}
