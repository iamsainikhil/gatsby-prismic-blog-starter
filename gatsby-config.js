require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: 'Blog',
    titleTemplate: '%s | Blog',
    description: `My personal blog with articles related to Web Development, Software Tools, Tips & Tricks, etc.`,
    author: `@iamsainikhil12`,
    siteUrl: `https://blog-iamsainikhil.vercel.app/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sai Nikhil | Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#f7f8f9`,
        theme_color: `#181818`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: `${process.env.PRISMIC_REPOSITORY_NAME}`,

        // An API access token to your prismic.io repository. This is required.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: () => (doc) => {
          // Route for blog posts
          if (doc.type === 'post') {
            return '/post/' + doc.uid
          } else if (doc.type === 'tag') {
            return '/tag/' + doc.uid
          } else if (doc.type === 'category') {
            return '/category' + doc.uid
          }
          // Homepage route fallback
          return '/'
        },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        // fetchLinks: [
        //   // Your list of links
        // ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        // htmlSerializer: () => {
        //   // Your HTML serializer
        //   require("./src/utils/htmlSerializer")
        // },

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          // Your custom types mapped to schemas
          article: require('./src/schemas/article.json'),
          category: require('./src/schemas/category.json'),
          author: require('./src/schemas/author.json')
        },

        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        // lang: '*',

        // Add the Prismic Toolbar script to the site. Defaults to false.
        // Set to "legacy" if your repository requires the older toolbar script.
        // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
        // prismicToolbar: true,

        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-sharp for use with gatsby-image.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different logic for each field if necessary.
        // This defaults to always return false.
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        }

        // Set the prefix for the filename where type paths for your schemas are
        // stored. The filename will include the MD5 hash of your schemas after
        // the prefix.
        // This defaults to 'prismic-typepaths---${repositoryName}'.
        // typePathsFilenamePrefix: 'prismic-typepaths---gatsby-source-prismic-test-site',
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `${process.env.GATSBY_DISQUS_NAME}`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
