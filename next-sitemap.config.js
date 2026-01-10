/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ratnam.org.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ratnam.org.in/sitemap.xml',
    ],
  },
  exclude: [],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/products') {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path === '/contact-us') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/about-us') {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
