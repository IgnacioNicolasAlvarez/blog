require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `Ignacio Alvarez's Blog`,
    siteTitleAlt: `Ignacio Alvarez's Blog`,
    siteUrl: `https://inalvarez.com/`,
    siteLanguage: `es`,
    siteHeadline: `aaaaaaaaaaa`,
    description: `Blog de Ignacio Alvarez`,
    author: `Alvarez Ignacio Nicolas`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `DD/MM/YYYY`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Sobre Mi`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/ignacio-nicolas-alvarez/`,
          },
          /*{
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
          },*/
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog de Ignacio Alvarez`,
        short_name: `Blog de Ignacio Alvarez`,
        description: `Blog de Ignacio Alvarez`,
        start_url: `/`,
        background_color: `#fff`,
        lang: `es`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
