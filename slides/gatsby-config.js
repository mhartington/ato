module.exports = {
  pathPrefix: '/ato',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '/',
      },
    },
  ],
}
