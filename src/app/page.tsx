import Team from "@/components/Team";
import { Hero } from "@/components/Hero";
import Spacing from "@/components/Spacing";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import Description from "@/components/Description";
import Testimonials from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import Price from "@/components/Price";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spacing />
      <Description />
      <Spacing />
      <Team />
      <Spacing />
      <Gallery />
      <Spacing />
      <Testimonials />
      <Price />
      <CallToAction />
      <Spacing />
      <Footer />
    </main>
  );
}
