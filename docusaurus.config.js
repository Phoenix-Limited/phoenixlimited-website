// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Phoenix Limited',
  tagline: 'Pioneering Technology',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.phoenixlimited.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://git.phoenixlimited.net/phoenixlimited/wiki-docs/-/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://git.phoenixlimited.net/phoenixlimited/wiki-docs/-/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      docs: {
        sidebar: {
          hideable:true,
        },
      },
      navbar: {
        title: 'Phoenix Limited',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'customerSidebar',
            position: 'left',
            label: 'MSP Customers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gameSidebar',
            position: 'left',
            label: 'Games',
          },
          {
            type: 'docSidebar',
            sidebarId: 'serverSidebar',
            position: 'left',
            label: 'Server',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            position: 'right',
            label: 'Services',
            items: [
              {
                label: 'SSO Portal',
                href: 'https://auth.phoenixlimited.net',
              },
              {
                label: 'Media Server',
                href: 'https://media.phoenixlimited.net',
              },
              {
                label: 'Media Requests',
                href: 'https://request.phoenixlimited.net',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: ' MSP Customers',
                to: '/docs/customers/intro',
              },
              {
                label: 'Games',
                to: '/docs/games/intro',
              },
              {
                label: 'Server',
                to: '/docs/server/login',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.phoenixlimited.net',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/q2GqwHsQeX',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Website',
                href: 'https://phoenixlimited.net',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} {siteConfig.title} · {siteConfig.tagline}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
