import { ParallaxScroll } from "./ui/parallax-scroll";

export function Galery() {
  const images = [
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-2.jpg",
    "/images/galery/galery-3.jpg",
    "/images/galery/galery-4.jpg",
    "/images/galery/galery-5.jpg",
    "/images/galery/galery-6.jpg",
    "/images/galery/galery-7.jpg",
    "/images/galery/galery-8.jpg",
    "/images/galery/galery-9.jpg",
  ];
  return <ParallaxScroll images={images} />;
}
