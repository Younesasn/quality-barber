"use client";
import { motion, useInView } from "framer-motion";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { useRef } from "react";

export function Gallery() {
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

  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.jpg",
  ];
  return (
    <motion.div
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
      <ParallaxScroll images={images} />
    </motion.div>
  );
}
