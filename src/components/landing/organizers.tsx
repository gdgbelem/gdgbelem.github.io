import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { organizers } from "@/lib/site";
import { getOrganizers } from "@/lib/content";
import { Container, Eyebrow } from "./section";
import { PersonCard } from "./person-card";

// Home preview of organizers — sources from the CMS, links to /organizadores.
export function Organizers() {
  const people = getOrganizers().slice(0, 4);
  if (people.length === 0) return null;

  return (
    <section id="organizadores" className="scroll-mt-20 bg-muted/40 py-20 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="bg-google-yellow">{organizers.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl">
              {organizers.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 text-pretty text-lg font-light leading-relaxed text-muted-foreground">
              {organizers.description}
            </p>
          </div>
          <Link
            href={organizers.ctaHref}
            className="group inline-flex shrink-0 items-center gap-1.5 text-base font-medium text-google-blue"
          >
            {organizers.ctaLabel}
            <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <li key={person.slug}>
              <PersonCard person={person} base="/organizadores" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
