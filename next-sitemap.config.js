module.exports = {
  siteUrl: "https://jeeptrip-pylypets.com.ua",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,

additionalPaths: async () => {
  return [
    {
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: "/sunrise",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "/paragliding",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "/certificate",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "/faq",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "/gallery",
      changefreq: "weekly",
      priority: 0.6,
    },
    {
      loc: "/location",
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: "/prices",
      changefreq: "monthly",
      priority: 0.8,
    },
  ];
},
};