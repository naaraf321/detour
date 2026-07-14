import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyDetour } from "@/components/site/WhyDetour";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Instagram } from "@/components/site/Instagram";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Detour. — Luxury Real Estate Cinematography Studio" },
      {
        name: "description",
        content:
          "Detour is a luxury real estate cinematography studio crafting cinematic property films, editorial photography, aerial and FPV drone work for the world's most distinctive homes.",
      },
      { property: "og:title", content: "Detour. — Luxury Real Estate Cinematography" },
      {
        property: "og:description",
        content:
          "Cinematic property films, editorial photography and drone cinematography for luxury real estate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="grain relative min-h-screen overflow-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Manifesto />
      {/* <Portfolio />  */}
      {/* <Services /> */}
      <Process />
      {/* <WhyDetour /> */}
      <Stats />
      <Testimonials />
      {/* <Instagram /> */}
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
