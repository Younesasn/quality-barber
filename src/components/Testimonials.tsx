"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import Marquee from "./magicui/marquee";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
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

  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

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
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
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

  return (
    <>
      <motion.h2
        className="text-balance bg-gradient-to-br from-30% bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent from-white to-white/40 sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4"
        ref={fadeInRef}
        animate={fadeInInView ? "animate" : "initial"}
        variants={fadeUpVariants}
        initial={false}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
          type: "spring",
        }}
      >
        Les clients qui nous ont visités
      </motion.h2>
      <motion.div
        className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl"
        ref={fadeInRef}
        animate={fadeInInView ? "animate" : "initial"}
        variants={fadeUpVariants}
        initial={false}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.21, 0.47, 0.32, 0.98],
          type: "spring",
        }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </motion.div>
    </>
  );
}
