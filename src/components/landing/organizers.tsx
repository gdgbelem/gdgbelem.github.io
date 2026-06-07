import { IconBrandLinkedin } from "@tabler/icons-react";
import { organizers } from "@/lib/site";
import { colorClass } from "./google-dots";
import { Container, Eyebrow } from "./section";

// Tonal avatar (bg tint + solid ink) per Google color — mirrors activities .ic tones.
const avatarTone: Record<string, string> = {
  "google-blue": "bg-google-blue/12 text-google-blue",
  "google-red": "bg-google-red/12 text-google-red",
  "google-yellow": "bg-google-yellow/20 text-[#b8860b]",
  "google-green": "bg-google-green/12 text-google-green",
};

// Initials for the photo-less fallback monogram (max 2 letters).
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Organizers() {
  return (
    <section id="organizadores" className="scroll-mt-20 bg-muted/40 py-20 md:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
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

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {organizers.items.map((person) => {
            const Card = person.link ? "a" : "div";
            const linkProps = person.link
              ? { href: person.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={person.name}>
                <Card
                  {...linkProps}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 outline-none transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:ring-4 focus-visible:ring-google-blue/30"
                >
                  {/* Signature Google color top-bar (four-color rotation). */}
                  <span
                    className={`absolute inset-x-0 top-0 h-[3px] ${colorClass[person.color]}`}
                    aria-hidden
                  />

                  {person.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="size-20 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className={`grid size-20 place-items-center rounded-full text-2xl font-extrabold ${avatarTone[person.color]}`}
                      aria-hidden
                    >
                      {initials(person.name)}
                    </span>
                  )}

                  <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold tracking-tight">
                    {person.name}
                    {person.link && (
                      <IconBrandLinkedin
                        size={17}
                        className="text-muted-foreground transition-colors group-hover:text-google-blue"
                      />
                    )}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">{person.role}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
