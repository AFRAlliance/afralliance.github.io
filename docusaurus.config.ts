import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Let’s Feed People, Not Landfill',
  tagline: 'Our members redistribute quality surplus food to communities across Aotearoa.',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://afralliance.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'afralliance', // Usually your GitHub org/user name.
  projectName: 'afralliance.github.io', // Usually your repo name.

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
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Aotearoa Food Rescue Alliance',
      logo: {
        alt: 'Aotearoa Food Rescue Alliance Logo',
        src: 'img/AFRA Logo Black White w Green.png',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/aotearoafoodrescue/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/aotearoafoodrescue/?hl=en',
            },
            {
              label: 'LinkedIn',
              href: 'https://nz.linkedin.com/company/aotearoa-food-rescue-alliance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'AFRA Website',
              href: 'https://afra.org.nz',
            },
            {
              label: 'AFRA Data Platform',
              href: 'https://data.afra.org.nz'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
