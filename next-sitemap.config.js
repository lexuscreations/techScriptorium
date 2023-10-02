/** @type {import('next-sitemap').IConfig} */

const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  changefreq: "weekly",
  generateRobotsTxt: true,
  outDir: "src/app/"
};
