import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, organizationSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `${site.siteName} — ${site.siteTagline}`,
    template: `%s | ${site.siteName}`,
  },
  description: site.siteDescription,
  keywords: [...site.keywords],
  authors: [{ name: site.organizationName, url: absoluteUrl("/") }],
  creator: site.organizationName,
  publisher: site.organizationName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale.replace("-", "_"),
    url: absoluteUrl("/"),
    title: `${site.siteName} — ${site.siteTagline}`,
    description: site.siteDescription,
    siteName: site.siteName,
    images: [
      {
        url: site.ogImage,
        width: site.ogImageWidth,
        height: site.ogImageHeight,
        alt: site.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.siteName} — ${site.siteTagline}`,
    description: site.siteDescription,
    images: [site.ogImage],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <SchemaMarkup schema={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
