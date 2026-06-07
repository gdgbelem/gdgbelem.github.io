import { IconMapPin, IconArrowRight } from "@tabler/icons-react";
import { upcomingEvents } from "@/lib/site";
import { Container, Eyebrow } from "./section";
import { Circle } from "./decorations";

export function UpcomingEvents() {
  return (
    <section id="eventos" className="relative scroll-mt-20 py-16 md:py-24">
      <Circle className="absolute left-[2%] top-16 hidden size-9 bg-google-yellow lg:block" />

      <Container>
        <div className="mb-12">
          <Eyebrow>{upcomingEvents.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            {upcomingEvents.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.items.map((event) => (
            <a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 outline-none transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:ring-4 focus-visible:ring-google-blue/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-16 flex-col items-center justify-center rounded-xl bg-google-blue/10 text-google-blue-dark">
                  <span className="text-2xl font-extrabold leading-none">{event.day}</span>
                  <span className="text-xs font-semibold uppercase">{event.month}</span>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-google-green/12 px-3 py-1.5 text-xs font-semibold text-google-green">
                  <span className="size-2 rounded-full bg-google-green" />
                  Inscrição gratuita
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight">{event.title}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <IconMapPin size={15} /> {event.location}
              </p>
              <p className="mt-3 flex-1 font-light leading-relaxed text-muted-foreground">
                {event.text}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-google-blue">
                Ver detalhes
                <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
