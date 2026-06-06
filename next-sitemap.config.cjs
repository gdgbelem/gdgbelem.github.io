/** @type {import('next-sitemap').IConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gdgbelem.github.io";
const siteUrl = `${host}${basePath}`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "out",
  changefreq: "weekly",
  autoLastmod: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (config, urlPath) => {
    let priority = 0.7;
    let changefreq = config.changefreq;

    if (urlPath === "/") {
      priority = 1.0;
    } else if (urlPath.startsWith("/eventos") || urlPath.startsWith("/sobre")) {
      priority = 0.8;
    } else {
      priority = 0.5;
      changefreq = "monthly";
    }

    return {
      loc: urlPath,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
