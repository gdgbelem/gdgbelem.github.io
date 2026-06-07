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

    // Strip trailing slash for matching (trailingSlash: true is on).
    const path = urlPath.replace(/\/$/, "") || "/";
    const isDetail = (base) => path.startsWith(`${base}/`);

    if (path === "/") {
      priority = 1.0;
    } else if (["/eventos", "/palestrantes"].includes(path)) {
      priority = 0.9; // main list pages
    } else if (["/sobre", "/organizadores", "/parceiros", "/contato"].includes(path)) {
      priority = 0.8;
    } else if (isDetail("/eventos") || isDetail("/palestrantes") || isDetail("/organizadores")) {
      priority = 0.6; // dynamic detail pages
      changefreq = "monthly";
    } else {
      priority = 0.5; // faq, codigo-de-conduta
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
