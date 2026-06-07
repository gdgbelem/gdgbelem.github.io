import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";
import { site, footerNav } from "@/lib/site";
import { Container } from "./section";

const socials = [
  { key: "instagram", Icon: IconBrandInstagram, label: "Instagram" },
  { key: "linkedin", Icon: IconBrandLinkedin, label: "LinkedIn" },
  { key: "twitter", Icon: IconBrandX, label: "Twitter" },
  { key: "facebook", Icon: IconBrandFacebook, label: "Facebook" },
] as const;

export function Footer() {
  const links = socials.filter((s) => site.social[s.key]);

  return (
    <footer className="border-t border-border py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12">
          <div>
            <Link href="/" className="text-lg font-extrabold tracking-tight">
              <span className="text-google-blue">G</span>
              <span className="text-google-red">D</span>
              <span className="text-google-yellow">G</span>
              <span className="text-foreground">Belém</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light text-muted-foreground">
              {site.siteDescription}
            </p>
            <div className="mt-5 flex gap-4">
              {links.map(({ key, Icon, label }) => (
                <a
                  key={key}
                  href={site.social[key]}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-google-blue"
                >
                  <Icon size={19} stroke={1.5} />
                </a>
              ))}
              <a
                href={`mailto:${site.contactEmail}`}
                aria-label="E-mail"
                className="text-muted-foreground transition-colors hover:text-google-blue"
              >
                <IconMail size={19} stroke={1.5} />
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em]">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-light text-muted-foreground transition-colors hover:text-google-blue"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[13.5px] text-muted-foreground sm:flex-row">
          <span>
            © {site.siteName}. Comunidade independente, não afiliada oficialmente ao Google LLC.
          </span>
        </div>
      </Container>
    </footer>
  );
}
