import Description from "@/components/Description";
import { Footer } from "@/components/Footer";
import { Galery } from "@/components/Galery";
import { Hero } from "@/components/Hero";
import Spacing from "@/components/Spacing";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spacing />
      <Description />
      <Spacing />
      <Team />
      <Spacing />
      <Footer />
    </main>
  );
}
