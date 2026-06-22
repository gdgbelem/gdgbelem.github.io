import Image from "next/image";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconBrandGithub,
  IconWorld,
  IconCalendarEvent,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { type Pessoa, type Evento, pessoaSocials, primaryRoleLabel } from "@/lib/content-types";
import { renderMdx } from "@/lib/render-mdx";
import { Container, Eyebrow } from "./section";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

const avatarTone: Record<string, string> = {
  "google-blue": "bg-google-blue/12 text-google-blue",
  "google-red": "bg-google-red/12 text-google-red",
  "google-yellow": "bg-google-yellow/20 text-[#b8860b]",
  "google-green": "bg-google-green/12 text-google-green",
};

const socialIcons: Record<string, ComponentType<{ size?: number; stroke?: number }>> = {
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
  twitter: IconBrandX,
  github: IconBrandGithub,
  website: IconWorld,
};

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

// Unified profile for both speakers and organizers (P3/P13).
export async function PersonProfile({
  person,
  events,
  crumbs,
}: {
  person: Pessoa;
  events: Evento[];
  crumbs: Crumb[];
}) {
  const socials = pessoaSocials(person);
  const bio = person.body ? await renderMdx(person.body) : null;
  const roles = primaryRoleLabel(person);

  return (
    <>
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {person.avatar ? (
              <Image
                src={person.avatar}
                alt={person.name}
                width={112}
                height={112}
                className="size-28 rounded-full object-cover"
              />
            ) : (
              <span
                className={`grid size-28 place-items-center rounded-full text-3xl font-extrabold ${avatarTone[person.color]}`}
                aria-hidden
              >
                {initials(person.name)}
              </span>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {roles}
              </p>
              <h1 className="mt-1 text-4xl font-extrabold tracking-tight md:text-5xl">
                {person.name}
              </h1>
              {(person.title || person.company) && (
                <p className="mt-2 text-lg font-light text-muted-foreground">
                  {[person.title, person.company].filter(Boolean).join(" · ")}
                </p>
              )}
              {socials.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {socials.map((s) => {
                    const Icon = socialIcons[s.key] ?? IconWorld;
                    return (
                      <a
                        key={s.key}
                        href={s.href}
                        aria-label={s.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-google-blue hover:text-google-blue"
                      >
                        <Icon size={18} stroke={1.6} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {bio ? (
              <>
                <Eyebrow>Bio</Eyebrow>
                <div className="prose-gdg mt-5 max-w-prose font-light leading-relaxed text-muted-foreground [&_a]:text-google-blue [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-4 [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic">
                  {bio}
                </div>
              </>
            ) : (
              <p className="font-light text-muted-foreground">Bio em breve.</p>
            )}
          </div>

          <aside className="flex flex-col gap-8">
            {person.interests && person.interests.length > 0 && (
              <div>
                <Eyebrow tone="bg-google-green">Áreas de interesse</Eyebrow>
                <div className="mt-4 flex flex-wrap gap-2">
                  {person.interests.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1.5 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {events.length > 0 && (
              <div>
                <Eyebrow tone="bg-google-red">Participações</Eyebrow>
                <ul className="mt-4 flex flex-col gap-3">
                  {events.map((event) => (
                    <li key={event.slug}>
                      <Link
                        href={`/eventos/${event.slug}`}
                        className="group flex items-start gap-3 rounded-xl border border-border p-3 transition-colors hover:border-google-blue/40"
                      >
                        <IconCalendarEvent
                          size={18}
                          className="mt-0.5 shrink-0 text-google-blue"
                        />
                        <span className="text-sm font-medium group-hover:text-google-blue">
                          {event.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
