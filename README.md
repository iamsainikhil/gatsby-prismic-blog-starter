<p align="center">
  <a href="https://gatsby-prismic-blog-starter.vercel.app/">
    <img alt="Gatsby" src="https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/gatsby_prismic.png" width="300" />
  </a>
</p>
<h1 align="center">
  Gatsby Prismic Blog Starter
</h1>

<p align="center">
<a href="https://www.npmjs.com/package/gatsby-prismic-blog-starter" target="_blank" rel="noreferrer noopener">
<img alt="npm" src="https://img.shields.io/npm/v/gatsby-prismic-blog-starter?style=for-the-badge">
</a>
<a href="https://www.npmjs.com/package/gatsby-prismic-blog-starter" target="_blank" rel="noreferrer noopener" style="margin: 0 0.25rem;">
<img alt="npm downloads" src="https://img.shields.io/npm/dt/gatsby-prismic-blog-starter?style=for-the-badge">
</a>
<a href="https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/LICENSE" target="_blank" rel="noreferrer noopener">
<img alt="GitHub" src="https://img.shields.io/github/license/iamsainikhil/gatsby-prismic-blog-starter?style=for-the-badge">
</a>
</p>

Kick off your project with this blog starter. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out the vibrant collection of Gatsby's [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

# 👀 Demo

- [https://gatsby-prismic-blog-starter.vercel.app/](https://gatsby-prismic-blog-starter.vercel.app/)
- [https://blog.iamsainikhil.com](https://blog.iamsainikhil.com/)
- Prismic Slices available with the starter can be seen in action [here](https://gatsby-prismic-blog-starter.vercel.app/article/prismic-slices).

[![Edit Gatsby Prismic Blog Starter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/gatsby-prismic-blog-starter-fh9sf?fontsize=14&hidenavigation=1&theme=dark)

# 🎉 **Features**

Multiple features of Prismic are used in this starter:

- **Slices**: Enrich your blogposts with custom quotes, images or codeblocks. You can order them how you like. When you used the *Image-Slice* the image will get inserted and optimized by **gatsby-image**
- **Relationship fields**: Categorize your blog articles in Categories via a relationship field. You can change categories on the fly
- **Both custom types (Single / Repeatable)**: Articles, Tags, Categories, Author sections of the website are managed with Prismic. The social media links or the header & footer sections are hardcoded content which can be customized easily!

Therefore the starter has following features:

- Prismic as Headless CMS
- [Theme UI](https://theme-ui.com/home) for styling
- Prism React Renderer plugin using PrismJS highlighting
- Responsive images (gatsby-image)
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support
  - Prismic Imgix transformations
- SEO
  - Sitemap
  - OpenGraph Tags
  - Twitter Tags
  - Favicons
- Offline Support
- WebApp Manifest Support
- [Typeface](https://github.com/KyleAMathews/typefaces/tree/master/README_images/packages) package based fonts
- Configurable

  - Use the `gatsby-config.js` to easily change the most important information
  - Themeable with `theme.js`

**⚠️ Note: This blog starter uses [Prismic](https://prismic.io/) as the Content Management System. Hence, you need to have the required data first before start using this starter.**

# 🛠️ **Prismic Setup**

## Account

- Create your Prismic account [here](https://prismic.io/signup)
- Create a project

## API Token

- After creating an account, head over to settings of the project you created earlier.
- Go to _API & Security_ section, grab the Permanent Access Token with _Access to master/README_images_.

## Custom Types

### Article

- Create a _Repeatable_ custom type with name _Article._
- Simply paste the JSON schema in `_src/schemas/article.json_` file in the _JSON editor_ of the `_Article_` type in _Prismic_. This will create all the below fields in the _Article_ type on the fly for you.
- Beauty of Prismic Slices is that they are optional data sections which can be customized very easily in the Prismic UI.
- **`Primary`** content of the article:

  - **uid** → ID of the article which you will find in the URL
  - **created** → Created date of the article
  - **modified** → Modified date of the article
  - **title** → Title of the article
  - **excerpt** → Short description of the article
  - **read_time** → Total time to read the article
  - **article_image** → Image of the article (ex- Thumbnail)

  ![Primary data fields Image](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_data_fields_part_1.png)

- **`Slices`**(Optional):

  - **Content**: This slice has 2 types (Rich Text and Quote) based on which the `content` is rendered in the UI.

    - **Text** (Rich Text Section) **→** Rich WYSIWYG editor content which is consumed in the UI as the HTML. Support for `inline code` which appear in the HTML with a class `codespan`.

    - **Quote** (Blockquote Section) → Select this type to have any blockquote content in the article

  ![Content Slice](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_data_fields_slice_content.png)

  - **Alert**: This slice has 4 types (Info, Success, Warning, and Danger) based on which the `alert` UI will have different background color as well as border color.

  ![Alert Slice](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/alert_slice_config.png)

  - **Image** (banner or gallery) → Use this slice to show a `banner` (single image with caption) or a `gallery` (group of images)

    ![Image Slice](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_data_fields_slice_image.png)


    - **Embed** → Use this slice to embed any platform content like YouTube, Vimeo, GitHub Gist, CodeSandbox, CodePen, etc.
        - **type** → Type of the embed like `GitHub Gist` or `Default` (YouTube, Vimeo, CodeSandbox, etc).
        - **embed_title** → Title of the embed.
        - **embed_url →** URL of the embed which will be consumed in an iframe in the UI

        ![Embed Slice](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_data_fields_slice_embed.png)

    - **Meta Information** (Website URL meta info Section) → Use this slice to show a meta info of any URL. You can obtain all the below information using [https://www.heymeta.com/](https://www.heymeta.com/)
        - **website_title →** Title of the website
        - **website_description →** Description of the website
        - **website_image** → Image of the website
        - **website_url →** URL of the website

        ![Meta Information Slice](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_data_fields_slice_meta_info.png)

    - **Code →** Use this slice to show any code block in the article
        - **type →** Mention the type of scenario where this code block is used. For ex- type of "List" will add some padding to the code block.
        - **lang →** Language of the code to have appropriate syntax highlighting using PrismJS
        - **code →** Actual code content

        ![Code Slice](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_data_fields_slice_code.png)

- **`Meta`** (meta information of the article)

  - **Categories** (repeatable section) with fields like:

    - category → Category of the article
    - slug → Category name in the URL

    _Category_ custom type is discussed later.

  - **Author** (non-repeatable section) → relationship field with _Author_ custom type discussed later.

- **`Tags` →** This is not defined in the Article type but can be set when you create any article like below:

  ![Tags](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_article_tags.png)

### Author

- Create a _Repeatable_ custom type with name _Author._
- Simply paste the JSON schema in `_src/schemas/author.json_` file in the _JSON editor_ of the `_Author_` type in _Prismic_. This will create all the below fields in the _Author_ type on the fly for you.
- Contents:
  - **uid →** URL slug of the author
  - **name →** Name of the author
  - **bio →** About the author
  - **avatar →** Image of the author
  - **social_links** (repeatble section) **→** Social links of the author
    - **platform_name →** Name of the platform (Facebook, Twitter, LinkedIn, Medium, GitHub, CodePen, Portfolio (website). However, you can customize the icons which is discussed later.
    - **platform_url →** URL of the platform

![Author schema](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_author.png)

![Author social links schema](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_author_social_links.png)

### Category

- Create a _Repeatable_ custom type with name _Category._
- Simply paste the JSON schema in `_src/schemas/category.json_` file in the _JSON editor_ of the `_Category_` type in _Prismic_. This will create all the below fields in the _Category_ type on the fly for you.
- Contents:
  - **name →** Name of the category

# 💻 Quick start

1. **Create a Gatsby site.**

   Use the [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/) to create a new site, specifying the default starter.

   ```bash
   npm install -g gatsby-cli

   # create a new Gatsby site using this starter
   gatsby new <name> https://github.com/iamsainikhil/gatsby-prismic-blog-starter
   ```

2. **Install the packages**

   Install the packages using the command `npm install`

3. **Environment File**

   - Go to _API & Security_ section of your _Prismic_ project, grab the Permanent Access Token with _Access to master/README_images_.
   - The Repository Name is the name you have entered at the creation of the repository (you’ll also find it as the subdomain in the URL)
   - This project has the support for [DISQUS](https://disqus.com/) comments section which need your DISQUS project name which can be found at _https://<your-project-shortname>.disqus.com/admin/settings/general/_
   - Create an `.env` file in the root directory of the project. Add the following properties in it:

   ```json
    GA_ID=<your Google Analytics tracking ID> (Optional)

    GATSBY_PRISMIC_REPOSITORY_NAME=<your prismic repository name> (Required)

    PRISMIC_ACCESS_TOKEN=<your prismic permanent access token> (Required)

    GATSBY_DISQUS_NAME=<your disqus project shortname> (Required)

    GATSBY_TELEMETRY_DISABLED=1 (Optional to disable GATSBY analytics)
   ```

4. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```bash
   # Go to project directory
   cd <name>

   # start the application
   npm run start
   ```

5. **Troubleshooting**

   If the application start process got stuck, just kill the process and restart the application.

   > **Known issue**: _Gatsby develop process sometimes get stuck at onPostBootstrap process. When this happens, just kill and restart the app. For more info, check [here](https://github.com/gatsbyjs/gatsby/issues/25216)._

6. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

   Open the `<name>` directory in your code editor of choice and edit `gatsby-config.js`. Save your changes and the browser will update in real time!

# ⚙️ Available Scripts

---

In the project directory, you can run:

`npm run start`

Runs the app in the development mode.Open `[http://localhost:8000](http://localhost:3000/)` to view it in the browser. The page will reload if you make edits. You will also see any lint or gatsby develop errors in the console.

`npm test`

Launches the test runner in the interactive watch mode. See the section about

**[running tests](https://www.gatsbyjs.org/docs/unit-testing/)** for more information.

`npm run build`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about **[deployment](https://www.gatsbyjs.org/docs/overview-of-the-gatsby-build-process/)** for more information.

`npm format`

Formats the app files like _js, jsx, json, and md_ using Prettier. You can learn more about the format **[here](https://prettier.io/docs/en/install.html)**.

# **🧐 What's inside?**

A quick look at the top-level files and directories you'll see in a Gatsby project.

```
.
├── node_modules
├── src
├── .gitignore
├── .eslintrc.js
├── .prettierignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

```

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.
2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
4. **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool to help find and fix problems in the JavaScript code.
5. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.
6. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
7. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
8. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
9. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
10. **`LICENSE`**: Gatsby Prismic Blog Starter is licensed under the MIT license.
11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
13. **`README.md`**: A text file containing useful reference information about your project.

# 🔬 **What's inside the `src`?**

A quick look at the top-level files and directories you'll see in a `src`.

```
src
├── components
├── fonts
├── gatsby-plugin-theme-ui
├── graphql_fragments
├── images
├── pages
├── schemas
├── slices
├── styles
├── templates
├── utils
```

1. **`components`:** This directory contain all of the reusable React components like Chip, Icon, Image, Listing, Layout, SEO, SliceZone, etc.
2. **`fonts`:** This directory contain any custom font files which are imported in `styles/_fonts.scss` and later consumed in `gatsby-plugin-theme-ui/theme.js`.
3. **`gatsby-plugin-theme-ui`:** This directory contain custom theme files related to [theme-ui](https://theme-ui.com/theme-spec) custom theme configuration.
4. **`graphql_fragments`:** This directory contain [GraphQL](https://www.gatsbyjs.org/docs/using-graphql-fragments/) query fragments which will significantly make these fragments reusable across several queries in the components.
5. **`images`:** This directory contain images which are used in the components and later be created in the `public/static` during gatsby build.
6. **`pages`:** This directory contain files which represent web pages like 404, index.js (homepage), etc. Moreover, you can generate pages based on the data using `createPage` method in `gatsby-node.js`.
7. **`schemas`:** This directory contain JSON schema files which represent each custom type defined in Prismic.
8. **`slices`:** This directory is the ❤️ of the article page with files representing the slices discussed earlier in Prismic setup section.
9. **`styles`:** This directory contain scss files which include further styling of the HTML using old school process. PS: New process is to just use `Emotion` based `CSS-in-JS` styling which is also used extensively across the project.
10. **`templates`:** This directory contain UI templates (components) for the dynamically generated pages as discussed in `6`.
11. **`utils`:** This directory contain general utility JS functions to reuse the functionality across the components.

# 🔌 Plugins

A list of plugins used in this starter project.

1. **`gatsby-source-prismic`:** Gatsby source plugin for building websites using [prismic.io](http://prismic.io/) as a data source. Note: this is different from `gatsby-source-prismic-graphql` . Check for more info [here](https://user-guides.prismic.io/en/articles/3647135-how-to-migrate-a-project-from-gatsby-source-prismic-to-gatsby-source-prismic-graphql).
2. **`gatsby-plugin-react-helmet`:** Provides drop-in support for server rendering data added with [React Helmet](https://github.com/nfl/react-helmet). Ract Helmet is a component which lets you control your document head using their React component. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/).
3. **`gatsby-plugin-theme-ui`:** Gatsby plugin for adding Theme UI to the project. For more info, check [here](https://theme-ui.com/packages/gatsby-plugin/).
4. **`gatsby-plugin-sass`:** Plugin to help use `scss` in Gatsby project. For more info, check [here](https://www.gatsbyjs.org/docs/sass/).
5. **`gatsby-plugin-sitemap`:** Plugin to create a sitemap for your Gatsby site. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/).
6. **`gatsby-source-filesystem`:** A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/).
7. **`gatsby-transformer-sharp` & `gatsby-plugin-sharp`:** Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/).
8. **`gatsby-plugin-manifest`:** Plugin provides generation of web app manifest for PWA. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/).
9. **`gatsby-plugin-disqus`:** A plugin that simplifies adding DISQUS comments to your Gatsby website. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-plugin-disqus/).
10. **`gatsby-plugin-offline`:** Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/).
11. `**gatsby-plugin-google-analytics`:\*\* Easily add Google Analytics tracking to your Gatsby site. For more info, check [here](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/).

# 🧰 3rd Party Packages

A list of packages used in this starter project.

1. **`dayjs`:** A 2KB immutable date library alternative to Moment.js with the same modern API. For more info, check [here](https://github.com/iamkun/dayjs).
2. **`npm-run-all`:** A CLI tool to run multiple npm-scripts in parallel or sequential. For more info, check [here](https://github.com/mysticatea/npm-run-all).
3. **`theme-ui`:** Build consistent, themeable React apps based on constraint-based design principles. For more info, check [here](https://github.com/system-ui/theme-ui).
4. **`prism-react-renderer`:** Renders highlighted Prism output to React (+ theming & vendored Prism). This package is used to syntax highlight the code blocks in article. For more info, check [here](https://github.com/FormidableLabs/prism-react-renderer).
5. **`react-copy-to-clipboard`:** Copy-to-clipboard React component used in Code slice `src/slices/Code.jsx`. For more info, check [here](https://github.com/nkbt/react-copy-to-clipboard).
6. **`react-gist`:** Github Gist React component used in Embed slice `src/slices/Embed.jsx`. For more info, check [here](https://github.com/tleunen/react-gist).
7. **`react-headroom`:** A handy react component to hide the site header until you need it. For more info, check [here](https://github.com/KyleAMathews/react-headroom).
8. **`react-icons`:** Absolutely useful package to get svg react icons of popular icon packs. For more info, check [here](https://github.com/react-icons/react-icons).
9. **`react-images`:** A mobile-friendly, highly customizable, carousel component for displaying media in ReactJS. For more info, check [here](https://github.com/jossmac/react-images).
10. **`react-snakke`:** Reading position indicator for React used to display the progress of the article as you scroll down the page. For more info, check [here](https://github.com/diogomoretti/react-snakke). This is one of the package which can be completely avoidable if you don't want it 😄.
11. **`react-toastify`:** React notification made easy. This is used to notify users of which code block they copied to clipboard used in Code slice `src/slices/Code.jsx`. For more info, check [here](https://github.com/fkhadra/react-toastify).
12. **`typeface-fira-code` & `typeface-inter`:** Typeface is a beautiful package which allows installation of fonts through npm. Damion is used for titles, Fira Code is used for code blocks where it supports font ligatures, and Inter for body. For more info, check [here](https://github.com/KyleAMathews/typefaces/tree/master/README_images/packages). If you don't want these fonts or use typeface based fonts, uninstall these packages as well as remove loading these fonts in `gatsby-browser.js`.

# ⛏️ Customization

List of files where you can customize stuff to make this starter your own!!

1. **`gatsby-browser.js`:** You can enable/disable `typefaces` declared here. You can also customize `shouldUpdateScroll` method provided by Gatsby to update the scroll position of the page you visited earlier.
2. **`gatsby-config.js`:** As the name suggests, bulk of the customization resides in this file. I left so many comments which help you customize the options for several plugins. Note: Update `siteMetadata` & `gatsby-plugin-manifest` options for sure!!
3. **`theme.js`:** This is the 👁️ of the project with all the theme options declared in this file. Take some time understanding the theme-ui configuration [here](https://theme-ui.com/theme-spec).
4. **`Listing.jsx` & `Footer.jsx`:** Sample tracking logic is setup in the code which can be used as an example to customize the GA tracking events. You can remove this code logic entirely or customize to your needs.
5. **`src/images/site_image.png`:** Replace this image to update website meta image.

# 🚀 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iamsainikhil/gatsby-prismic-blog-starter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/iamsainikhil/gatsby-prismic-blog-starter)

# ⚓ Prismic Webhook

Prismic Webhook allows you to automatically or manually trigger a deployment process in Netlify or Vercel if any post is published or unpublished OR for other events in Prismic. I use Vercel as the example and I guess it might be quite similar for Netlify or any other cloud service.

## Steps:

- Create a Deploy Hook in Vercel [here](https://vercel.com/iamsainikhil/gatsby-prismic-blog-starter/settings/git-integration). For more info, check [here](https://vercel.com/docs/v2/more/deploy-hooks)

![deploy_hook_vercel](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/deploy_hook_vercel.png)

- Copy the hook link and past in the URL section of the prismic Webhook
- Create a Prismic Webhook [here](https://iamsainikhil-blog.prismic.io/settings/webhooks/). For more info, check [here](https://user-guides.prismic.io/en/articles/790505-webhooks). -

![prismic_webhook](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_webhook.png)

- The `Secret` field is _optional_ in the Prismic Webhook. If you set it, Prismic will send the content to your server, so that you can verify that the request is coming from prismic.io.
- After successful creation of the Webhook, you can manually trigger it and can also see the logs.

![prismic_webhoks](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/prismic_webhooks.png)

> You can create any number of Webhooks for a prismic project!

# 🏎 Roadmap

- [x] Publish this starter as a template
- [x] Analytics support (Google Analytics)
- [ ] Prismic Preview Setup
- [ ] Pagination Feature
- [ ] Search Feature
- [ ] Testing

# **🙌 Contribution**

- Open pull request with improvements.
- If you have any new idea, check the **[feature request](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/.github/ISSUE_TEMPLATE/feature_request.md)** template to create a request.
- If you found any issue or a bug, check the **[bug report](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/.github/ISSUE_TEMPLATE/bug_report.md)** template to create a report.

# **📃 License**

Have a look at the **[license file](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/LICENSE)** for details

# **📧 Contact**

Whether you’d like to discuss about this starter template or simply say “hello”, I’d love to hear from you.

Email: **[contact@iamsainikhil.com](mailto:contact@iamsainikhil.com)**

# 🙏 Acknowledgements

Special thanks to [Kyle Mathews](https://github.com/KyleAMathews) & [Lennart](https://github.com/LekoArts) for creating respective gatsby based starter templates from which I gained a lot of knowledge and developed this template.

Orginally this starter was started using this [one](https://github.com/gatsbyjs/gatsby-starter-default).

PS: If you need to develop a customizable whole webiste using Gatsby & Prismic, I recommend you to check this [template](https://github.com/LekoArts/gatsby-starter-prismic) created by Lennart.

See this [page](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/wiki/Acknowledgements) on the wiki for a list of Acknowledgements for the plugins used in this starter.

# **🎓 Learning Gatsby**

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the *Guides*, *API Reference*, and *Advanced Tutorials* sections in the sidebar.

# **🎓 Learning Prsimic**

Looking for more guidance? Full documentation for Prismic lives [on the website](https://prismic.io/docs). Here are some places to start:

- **For most developers, I recommend starting with our [in-depth tutorial for creating a site with Gatsby & Prismic](https://prismic.io/docs/gatsby/getting-started/home).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, check the** [How To Guides](https://user-guides.prismic.io/en/collections/22550-how-to-guides)**.**

# **🌈 Accessibility**

This starter successfully passed the color contrast and accessibility tests.

- a11y Color Contrast Accessibility tested at [a11y](https://color.a11y.com/Contrast/) ![a11y Color Contrast Accessibility Result](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/a11y_color_result.png)

- Web Accessibility tested at [ACHECKER](https://achecker.ca/checker/index.php) ![Web Accessibility Result](https://github.com/iamsainikhil/gatsby-prismic-blog-starter/raw/master/README_images/web_accessibility_result.png)
