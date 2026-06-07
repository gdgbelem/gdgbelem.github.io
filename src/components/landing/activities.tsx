import {
  IconCalendarEvent,
  IconConfetti,
  IconBulb,
  IconMessageCircle,
  IconUsers,
  IconHeart,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { activities } from "@/lib/site";
import { Container, Eyebrow } from "./section";

const icons: Record<string, ComponentType<{ size?: number; stroke?: number }>> = {
  calendar: IconCalendarEvent,
  devfest: IconConfetti,
  ai: IconBulb,
  talks: IconMessageCircle,
  network: IconUsers,
  free: IconHeart,
};

// Tonal background + solid foreground per Google color (matches reference .ic).
const iconTone: Record<string, string> = {
  "google-blue": "bg-google-blue/12 text-google-blue",
  "google-red": "bg-google-red/12 text-google-red",
  "google-yellow": "bg-google-yellow/20 text-[#b8860b]",
  "google-green": "bg-google-green/12 text-google-green",
};

const notch = "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)";

export function Activities() {
  return (
    <section id="atividades" className="scroll-mt-20 bg-muted/40 py-20 md:py-24">
      <Container>
        <div className="mb-12">
          <Eyebrow tone="bg-google-green">{activities.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl">
            {activities.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ clipPath: notch }}
              >
                <span
                  className={`mb-5 grid size-[54px] place-items-center rounded-[14px] ${iconTone[item.color]}`}
                >
                  <Icon size={28} stroke={2} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2.5 font-light leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
