import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { cta, site } from "@/lib/site";

const notch =
  "polygon(38px 0, 100% 0, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0 100%, 0 38px)";

const socials = [
  { key: "instagram", Icon: IconBrandInstagram, label: "Instagram" },
  { key: "linkedin", Icon: IconBrandLinkedin, label: "LinkedIn" },
  { key: "twitter", Icon: IconBrandX, label: "Twitter" },
  { key: "facebook", Icon: IconBrandFacebook, label: "Facebook" },
] as const;

export function Cta() {
  const links = socials.filter((s) => site.social[s.key]);

  return (
    <section id="contato" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden bg-google-blue px-7 py-20 text-center text-white sm:px-12 md:px-20"
          style={{ clipPath: notch }}
        >
          <span
            className="pointer-events-none absolute -bottom-16 -left-16 size-52 rounded-full bg-white/10"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-white/10"
            aria-hidden
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-lg font-light text-white/90">
              {cta.description}
            </p>
            <a
              href={cta.button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center rounded bg-white px-9 py-4 text-[17px] font-medium text-google-blue-dark shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {cta.button.label}
            </a>

            {links.length > 0 && (
              <div className="mt-10 flex justify-center gap-4">
                {links.map(({ key, Icon, label }) => (
                  <a
                    key={key}
                    href={site.social[key]}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-12 place-items-center rounded-full bg-white/15 transition hover:-translate-y-0.5 hover:bg-white/30"
                  >
                    <Icon size={20} stroke={1.5} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
