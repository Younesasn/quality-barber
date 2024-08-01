import Team from "@/components/Team";
import { Hero } from "@/components/Hero";
import Spacing from "@/components/Spacing";
import { Footer } from "@/components/Footer";
import { Galery } from "@/components/Galery";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spacing />
      <Description />
      <Spacing />
      <Team />
      <Spacing />
      <Galery />
      <Spacing />
      <Footer />
    </main>
  );
}
