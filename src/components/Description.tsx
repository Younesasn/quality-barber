"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { FeatureSection } from "./magicui/feature";

const content = [
  {
    title: "Quality Barber",
    description:
      "Un salon de coiffure innovant et dynamique, vous accueille chaleureusement à Dunkerque. Avec une équipe de trois coiffeurs talentueux, nous vous offrons des prestations de qualité pour vous assurer une coupe de cheveux impeccable.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          loading="lazy"
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
    title: "Précision et personnalisation",
    description:
      "Nos spécialités incluent également la taille de la barbe, que ce soit avec des ciseaux experts ou un rasoir précis. Notre souci du détail et notre savoir-faire nous permettent de vous offrir un service personnalisé, en accord avec vos envies et vos besoins.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          loading="lazy"
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
    title: "Expérience au rendez-vous",
    description:
      "Venez découvrir l'expérience Quality Barber, où vous serez entre de bonnes mains. Réservez dès maintenant votre rendez-vous dans notre salon de coiffure à Dunkerque et laissez-nous sublimer votre style.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image 
          loading="lazy"
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
  return (
    // <motion.section
    //   className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
    //   ref={fadeInRef}
    //   animate={fadeInInView ? "animate" : "initial"}
    //   variants={fadeUpVariants}
    //   initial={false}
    //   transition={{
    //     duration: 0.6,
    //     delay: 0.1,
    //     ease: [0.21, 0.47, 0.32, 0.98],
    //     type: "spring",
    //   }}
    // >
    //   <StickyScroll content={content} />
    // </motion.section>
    (FeatureSection())
  );
}
