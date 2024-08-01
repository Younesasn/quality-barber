"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Quality Barber",
    designation: "Foundation",
    image: "/images/qlt.jpg",
    url: "https://www.instagram.com/qlt.barber/",
  },
  {
    id: 2,
    name: "Lawni",
    designation: "CEO & Barber",
    image: "/images/laou.jpg",
    url: "https://www.instagram.com/lawni_barber/",
  },
  {
    id: 3,
    name: "Bacaruus",
    designation: "Barber",
    image: "/images/bacaruus.jpg",
    url: "https://www.instagram.com/bacaruusbarber/",
  },
  {
    id: 4,
    name: "Fdsstyle",
    designation: "Barber",
    image: "/images/fdsstyle.jpg",
    url: "https://www.instagram.com/fdsstyle/",
  },
];

export function Avatars() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}