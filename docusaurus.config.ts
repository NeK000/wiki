import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "NeK000's Wiki",  
  tagline: "Wiki for homelabbers, nerds, and self-hosting enthusiasts",
  favicon: "/logo.png",
  url: "https://NeK000.github.io",
  baseUrl: "/",
  organizationName: "nek000",
  projectName: "me",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
  require.resolve('@easyops-cn/docusaurus-search-local'),
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/NeK000/me/tree/main",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "NeK000's Wiki",
      logo: {
        alt: "NeK000's Wiki Logo",
        src: "/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "wikiSidebar",
          position: "left",
          label: "Wiki",
        },
        {
          type: "docSidebar",
          sidebarId: "homelabSidebar",
          position: "left",
          label: "Homelab",
        },
        {
          href: "https://github.com/NeK000/me",
          label: "GitHub",
          position: "right",
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Wiki",
              to: "wiki/intro",
            },
            {
              label: "Homelab",
              to: "homelab/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/NeK000/me",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "docker", "yaml", "json", "typescript", "javascript"],
    },
    metadata: [
      { name: "keywords", content: "wiki, homelab, documentation, guide, self-hosted, server, networking" },
      { name: "description", content: "Comprehensive wiki and documentation for homelabbers, covering server setup, networking, and self-hosted applications." },
      { name: "author", content: "NeK000" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "NeK000's Wiki" },
      { property: "og:description", content: "Wiki for Homelabbers and related projects" },
      { property: "og:image", content: "/logo.png"},
      { property: "og:url", content: "https://wiki.nek000.ninik.group" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
