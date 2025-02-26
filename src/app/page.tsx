import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Numbers } from "../sections/Numbers";
import { Unlock } from "../sections/Unlock";
import { Partner } from "../sections/Partner";
import { Logos } from "../sections/Logos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <Unlock />
      <Partner />
      <Logos />
    </>
  );
}
