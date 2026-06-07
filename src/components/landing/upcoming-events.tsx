import { IconMapPin } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";
import { upcomingEvents } from "@/lib/site";
import { Circle } from "./decorations";

export function UpcomingEvents() {
  return (
    <section id="eventos" className="relative scroll-mt-20 py-24">
      <Circle className="absolute left-[2%] top-16 hidden size-9 bg-google-yellow lg:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="mb-4 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-0.5 w-8 rounded bg-google-blue" />
            {upcomingEvents.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {upcomingEvents.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.items.map((event) => (
            <article
              key={event.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
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

              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ className: "mt-6 self-start" })}
              >
                Ver detalhes
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
