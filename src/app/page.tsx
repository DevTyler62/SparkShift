import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Numbers } from "../sections/Numbers";
import { Unlock } from "../sections/Unlock";
import { Partner } from "../sections/Partner";
import { Logos } from "../sections/Logos";
import { Optimization } from "../sections/Optimization";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <Unlock />
      <Partner />
      <Logos />
      <Optimization />
      <Footer />
    </>
  );
}
