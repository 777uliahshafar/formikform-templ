module.exports = {
  siteMetadata: {
    title: `Kuesioner Desain Perkotaan`,
    description: `Kuesioner ini dilengkapi beragam macam pertanyaan baik pribadi maupun umum. Segala macam informasi terkait privasi yang dikirimkan akan digunakan untuk kepentingan studi dan ilmu pengetahuan dan akan dijaga sebaik mungkin untuk tidak disebarluaskan atau disalahgunakan. Cheers! `,
    author: `@uliahshafar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
