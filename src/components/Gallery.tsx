"use client";
import { motion, useInView } from "framer-motion";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { useRef } from "react";

export function Gallery() {
  const fadeInDivRef = useRef<HTMLDivElement>(null);
  const fadeInDivInView = useInView(fadeInDivRef as unknown as React.RefObject<Element>, { once: true });

  const fadeInH2Ref = useRef<HTMLHeadingElement>(null);
  const fadeInH2InView = useInView(fadeInH2Ref as unknown as React.RefObject<Element>, { once: true });

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

  const images = [
    "/images/gallery/gallery-1.png",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.png",
  ];
  return (
    <motion.div
      ref={fadeInDivRef}
      animate={fadeInDivInView ? "animate" : "initial"}
      variants={fadeUpVariants}
      initial={false}
      transition={{
        duration: 0.6,
        delay: 0.4,
        ease: [0.21, 0.47, 0.32, 0.98],
        type: "spring",
      }}
    >
      <motion.div
        className="text-balance bg-gradient-to-br from-30% bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent from-white to-white/40 sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4"
        ref={fadeInDivRef}
        animate={fadeInDivInView ? "animate" : "initial"}
        variants={fadeUpVariants}
        initial={false}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
          type: "spring",
        }}
      >
        Nos Réalisations
      </motion.div>
      <ParallaxScroll images={images} />
    </motion.div>
  );
}
