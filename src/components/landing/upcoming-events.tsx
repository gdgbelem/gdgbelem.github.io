import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { upcomingEvents } from "@/lib/site";
import { getUpcomingEventos } from "@/lib/content";
import { Container, Eyebrow } from "./section";
import { Circle } from "./decorations";
import { EventCard } from "./event-card";

// Home preview of upcoming events — sources from the CMS, links to the full /eventos page.
export function UpcomingEvents() {
  const events = getUpcomingEventos().slice(0, 2);
  if (events.length === 0) return null;

  return (
    <section id="eventos" className="relative scroll-mt-20 py-16 md:py-24">
      <Circle className="absolute left-[2%] top-16 hidden size-9 bg-google-yellow lg:block" />

      <Container>
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>{upcomingEvents.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {upcomingEvents.title}
            </h2>
          </div>
          <Link
            href={upcomingEvents.ctaHref}
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-medium text-google-blue sm:inline-flex"
          >
            {upcomingEvents.ctaLabel}
            <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
