import Description from "@/components/Description";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Spacing from "@/components/Spacing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spacing />
      <Description />
      <Footer />
    </main>
  );
}
