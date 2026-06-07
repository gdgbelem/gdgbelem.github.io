import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IconMapPin, IconCalendarEvent, IconClock } from "@tabler/icons-react";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs, generateEventSchema } from "@/lib/schema";
import { getAllEventos, getEventoBySlug, resolvePessoas, getPessoaBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/render-mdx";
import { PageHeader } from "@/components/landing/page-header";
import { Container, Eyebrow } from "@/components/landing/section";
import { LinkButton } from "@/components/landing/button";
import { PersonCard } from "@/components/landing/person-card";

export function generateStaticParams() {
  return getAllEventos().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventoBySlug(slug);
  if (!event) return { title: "Evento não encontrado", robots: { index: false } };
  return pageMetadata({
    title: event.title,
    description: event.summary,
    path: `/eventos/${event.slug}`,
    image: event.cover || undefined,
  });
}

const fmtDate = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
const fmtTime = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" });

export default async function EventoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventoBySlug(slug);
  if (!event) notFound();

  const speakers = resolvePessoas(event.speakers);
  const body = event.body ? await renderMdx(event.body) : null;
  const date = new Date(event.date);
  const upcoming = event.status === "upcoming";

  return (
    <>
      <SchemaMarkup
        schema={[
          generateEventSchema({
            name: event.title,
            description: event.summary,
            startDate: date.toISOString(),
            url: absoluteUrl(`/eventos/${event.slug}`),
            image: event.cover || undefined,
            venueName: event.location,
            venueCity: event.city,
          }),
          generateBreadcrumbs([
            { name: "Início", url: absoluteUrl("/") },
            { name: "Eventos", url: absoluteUrl("/eventos") },
            { name: event.title, url: absoluteUrl(`/eventos/${event.slug}`) },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={event.kind}
        eyebrowTone={`bg-${event.color}`}
        title={event.title}
        lead={event.summary}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Eventos", href: "/eventos" },
          { label: event.title },
        ]}
      >
        {upcoming && event.registrationUrl && (
          <LinkButton href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
            Inscrever-se
          </LinkButton>
        )}
      </PageHeader>

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Eyebrow>Sobre o evento</Eyebrow>
            <div className="prose-gdg mt-5 max-w-prose font-light leading-relaxed text-muted-foreground [&_a]:text-google-blue [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-4">
              {body ?? <p>Mais detalhes em breve.</p>}
            </div>

            {event.agenda && event.agenda.length > 0 && (
              <div className="mt-12">
                <Eyebrow tone="bg-google-yellow">Programação</Eyebrow>
                <ul className="mt-6 flex flex-col">
                  {event.agenda.map((item, i) => {
                    const sp = item.speaker ? getPessoaBySlug(item.speaker) : undefined;
                    return (
                      <li
                        key={i}
                        className="flex flex-col gap-1 border-t border-border py-4 sm:flex-row sm:items-baseline sm:gap-5"
                      >
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-google-blue">
                          <IconClock size={14} /> {item.time}
                        </span>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {sp && (
                            <a
                              href={`/palestrantes/${sp.slug}`}
                              className="text-sm text-muted-foreground hover:text-google-blue"
                            >
                              {sp.name}
                            </a>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {speakers.length > 0 && (
              <div className="mt-12">
                <Eyebrow tone="bg-google-red">Palestrantes confirmados</Eyebrow>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                  {speakers.map((person) => (
                    <li key={person.slug}>
                      <PersonCard person={person} base="/palestrantes" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground">
                Detalhes
              </h2>
              <ul className="mt-5 flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <IconCalendarEvent size={18} className="mt-0.5 shrink-0 text-google-blue" />
                  <span>
                    {fmtDate.format(date)}
                    <br />
                    <span className="text-muted-foreground">{fmtTime.format(date)}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconMapPin size={18} className="mt-0.5 shrink-0 text-google-blue" />
                  <span>
                    {event.location}
                    <br />
                    <span className="text-muted-foreground">{event.city}</span>
                  </span>
                </li>
              </ul>
              {upcoming && event.registrationUrl && (
                <LinkButton
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full"
                >
                  Inscrever-se
                </LinkButton>
              )}
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
