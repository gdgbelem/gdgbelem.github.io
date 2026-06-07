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

const icons: Record<string, ComponentType<{ size?: number; stroke?: number; className?: string }>> = {
  ai: IconBulb,
  devfest: IconConfetti,
  build: IconSparkles,
  talks: IconMessageCircle,
};

export function PastEvents() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-0.5 w-8 rounded bg-google-blue" />
              {pastEvents.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {pastEvents.title}
            </h2>
          </div>
          <a
            href="https://gdg.community.dev/gdg-belem/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-medium text-google-blue sm:inline-flex"
          >
            Ver galeria
            <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:px-0">
          {pastEvents.items.map((event) => {
            const Icon = icons[event.icon];
            return (
              <article
                key={event.title}
                className="w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
              >
                <div
                  className={`relative grid h-40 place-items-center ${colorClass[event.color]}`}
                >
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
