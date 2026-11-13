import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Journey } from "@/components/sections/Journey";
import { Testimonials } from "@/components/sections/Testimonials";
import { BeyondWork } from "@/components/sections/BeyondWork";
import { Contact } from "@/components/sections/Contact";

/** One narrative page: from the first thought (Hero) to the next idea (Contact). */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <About />
      <Expertise />
      <SelectedWork />
      <Journey />
      <Testimonials />
      <BeyondWork />
      <Contact />
    </>
  );
}
