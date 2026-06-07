import {
  IconArrowRight,
  IconBulb,
  IconConfetti,
  IconSparkles,
  IconMessageCircle,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { pastEvents } from "@/lib/site";
import { colorClass } from "./google-dots";
import { Container, Eyebrow } from "./section";

const galleryHref = "https://gdg.community.dev/gdg-belem/";

const icons: Record<string, ComponentType<{ size?: number; stroke?: number; className?: string }>> = {
  ai: IconBulb,
  devfest: IconConfetti,
  build: IconSparkles,
  talks: IconMessageCircle,
};

export function PastEvents() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <Eyebrow tone="bg-google-red">{pastEvents.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {pastEvents.title}
            </h2>
          </div>
          <a
            href={galleryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-medium text-google-blue sm:inline-flex"
          >
            Ver galeria
            <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {pastEvents.items.map((event) => {
            const Icon = icons[event.icon];
            return (
              <a
                key={event.title}
                href={galleryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card outline-none transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:ring-4 focus-visible:ring-google-blue/30"
              >
                <div className={`relative grid h-40 place-items-center ${colorClass[event.color]}`}>
                  <span className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                    {event.tag}
                  </span>
                  <Icon size={64} stroke={1.5} className="text-white/90" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {event.date}
                  </div>
                  <h3 className="mt-1.5 font-semibold leading-snug">{event.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
