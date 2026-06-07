import { about } from "@/lib/site";
import { colorClass } from "./google-dots";
import { Container, Eyebrow } from "./section";

function highlightDescription(text: string, term: string) {
  const i = text.indexOf(term);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="font-medium text-foreground">{term}</span>
      {text.slice(i + term.length)}
    </>
  );
}

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-16 md:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            {about.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
            {highlightDescription(about.description, about.highlightTerm)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {about.pills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2.5 rounded-full bg-muted px-4 py-2.5 text-sm font-medium"
              >
                <span className={`size-2.5 rounded-full ${colorClass[pill.color]}`} />
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <AboutVisual />
      </Container>
    </section>
  );
}

function AboutVisual() {
  return (
    <div className="flex justify-center lg:justify-end" aria-hidden>
      <svg viewBox="0 0 420 380" className="w-full max-w-md">
        <circle cx="300" cy="110" r="78" fill="var(--google-blue)" />
        <path d="M70 300 L150 160 L230 300 Z" fill="var(--google-yellow)" />
        <rect x="40" y="60" width="120" height="120" rx="16" fill="var(--google-red)" />
        <g fill="var(--google-green)">
          <rect x="250" y="240" width="26" height="26" rx="3" />
          <rect x="284" y="266" width="26" height="26" rx="3" />
          <rect x="318" y="292" width="26" height="26" rx="3" />
          <rect x="216" y="214" width="26" height="26" rx="3" />
        </g>
        <g fill="#fff">
          <rect x="62" y="86" width="76" height="12" rx="6" />
          <rect x="62" y="110" width="54" height="12" rx="6" />
          <rect x="62" y="134" width="68" height="12" rx="6" />
        </g>
        <circle cx="300" cy="110" r="30" fill="#fff" />
        <path
          d="M300 96 v28 M286 110 h28"
          stroke="var(--google-blue)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
