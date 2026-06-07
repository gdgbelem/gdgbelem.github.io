// JSON-LD (schema.org) structured data for SEO.
import { site, absoluteUrl, socialLinks } from "@/lib/site";

const ORG_ID = `${absoluteUrl("/")}/#organization`;
const WEBSITE_ID = `${absoluteUrl("/")}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.organizationName,
  url: absoluteUrl("/"),
  logo: absoluteUrl(site.ogImage),
  description: site.siteDescription,
  areaServed: site.country,
  sameAs: socialLinks(),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: site.contactEmail,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: absoluteUrl("/"),
  name: site.siteName,
  description: site.siteDescription,
  inLanguage: site.locale,
  publisher: { "@id": ORG_ID },
};

type EventInput = {
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  url?: string;
  image?: string;
  venueName?: string;
  venueCity?: string;
};

export function generateEventSchema(event: EventInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description ?? site.siteDescription,
    startDate: event.startDate,
    endDate: event.endDate ?? event.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: event.url ?? absoluteUrl("/"),
    image: [absoluteUrl(event.image ?? site.ogImage)],
    location: {
      "@type": "Place",
      name: event.venueName ?? `${site.city}, ${site.region}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.venueCity ?? site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
    },
    organizer: { "@id": ORG_ID, name: site.organizationName, url: absoluteUrl("/") },
  };
}

type FaqItem = { q: string; a: string };

export function generateFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

type PersonInput = {
  name: string;
  description?: string;
  jobTitle?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
};

export function generatePersonSchema(person: PersonInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    ...(person.description && { description: person.description }),
    ...(person.jobTitle && { jobTitle: person.jobTitle }),
    ...(person.url && { url: person.url }),
    ...(person.image && { image: person.image }),
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
    memberOf: { "@id": ORG_ID, name: site.organizationName },
  };
}

type BreadcrumbItem = { name: string; url: string };

export function generateBreadcrumbs(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface SchemaMarkupProps {
  schema: object | object[];
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
