/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.openmodels.run',
  generateRobotsTxt: true,
  outDir: './out',
}
