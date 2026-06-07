import type { Metadata } from "next";
import { absoluteUrl, site, faq } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs, generateFaqSchema } from "@/lib/schema";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { About } from "@/components/landing/about";
import { Activities } from "@/components/landing/activities";
import { UpcomingEvents } from "@/components/landing/upcoming-events";
import { PastEvents } from "@/components/landing/past-events";
import { Faq } from "@/components/landing/faq";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  description: site.siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <SchemaMarkup
        schema={[
          generateFaqSchema([...faq]),
          generateBreadcrumbs([{ name: "Início", url: absoluteUrl("/") }]),
        ]}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Activities />
        <UpcomingEvents />
        <PastEvents />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
