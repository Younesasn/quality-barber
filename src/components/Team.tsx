"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Team() {
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
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
        Notre Team
      </motion.h2>
      <motion.div
        className="md:flex flex-wrap justify-center space-y-8 md:space-y-0 md:justify-between"
        ref={fadeInRef}
        animate={fadeInInView ? "animate" : "initial"}
        variants={fadeUpVariants}
        initial={false}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
          type: "spring",
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/laou.jpg"}
            width={150}
            height={150}
            className="rounded-full border-2 border-white"
            alt="Laouny"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold">Lawni</h2>
            <p className="text-gray-600 text-lg">CEO & Barber</p>
            <Link
              href="https://www.instagram.com/lawni_barber/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <InstagramLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/bacarus.jpg"}
            width={150}
            height={150}
            className="rounded-full border-2 border-white"
            alt="Bacaruus"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold">Bacaruus</h2>
            <p className="text-gray-600 text-lg">Barber</p>
            <Link
              href="https://www.instagram.com/bacaruusbarber/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <InstagramLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/fdsstyle.jpg"}
            width={150}
            height={150}
            className="rounded-full border-2 border-white"
            alt="Fdsstyle"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold">Fdsstyle</h2>
            <p className="text-gray-600 text-lg">Barber</p>
            <Link
              href="https://www.instagram.com/fdsstyle/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <InstagramLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
