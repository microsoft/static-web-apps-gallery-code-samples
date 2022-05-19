// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Static Web Apps Gallery',
  tagline: 'A Community Projects & Code Samples Showcase',
  url: 'https://nitya.github.io',
  baseUrl: '/static-web-apps-gallery-code-samples/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nitya', // Usually your GitHub org/user name.
  projectName: 'static-web-apps-gallery-code-samples', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: `gh-pages`, // default = gh-pages

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SWA Gallery',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/showcase', label: 'Showcase', position: 'left'},
          {to: '/contribute', label: 'Contributions', position: 'right'},
          {to: 'https://github.com/orgs/staticwebdev/discussions/14', label: 'Discussions', position: 'right'}, 
          {
            href: 'https://github.com/microsoft/static-web-apps-gallery-code-samples',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Discover',
            items: [
              {
                label: 'SWA Docs',
                to: 'https://docs.microsoft.com/en-us/azure/static-web-apps/overview',
              },
              {
                label: 'SWA CLI',
                to: 'https://github.com/Azure/static-web-apps-cli',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Learning Path',
                to: 'https://docs.microsoft.com/en-us/learn/paths/azure-static-web-apps/',
              },
              {
                label: 'Tips & Tricks',
                to: 'https://docs.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Dev.to',
                href: 'https://dev.to/t/staticwebapps',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AzureStaticApps',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with ♥️ using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: 'img/logo.png',

      metadata: [{
        name: 'twitter:card', 
        content: 'Welcome to the Azure Static Web Apps Gallery of community-created projects! Explore the examples - or add your own!'
      }],
      announcementBar: {
        id: 'Add Your Project!',
        content:
          'Learn with <a target="_blank" rel="noopener noreferrer" href="https://aka.ms/30DaysOfSWA/"><b>#30DaysOfSWA</b></a> - then <a target="_blank" rel="noopener noreferrer" href="https://portal.azure.com/?feature.customportal=false&WT.mc_id=30daysofswa-61155-ninarasi#create/Microsoft.StaticApp"><b>Deploy To Azure</b>!</a> &nbsp;🚀',
        backgroundColor: '#50E6FF',
        textColor: '#552F99',
        isCloseable: false,
      },
    }),
};

module.exports = config;
