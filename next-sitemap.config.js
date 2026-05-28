// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://mobiletyrechampions.com',
  generateRobotsTxt: true,
  // Exclude any URL that includes a query string
  exclude: [
    '/contact/*',               // location‑specific contact pages
    '/find-tyres*?size=*',      // size‑filtered lookup pages
    '/**/*?*',                  // generic catch‑all for any `?` in the URL
  ],
  changefreq: 'weekly',
  priority: 0.8,
};
export default config;
