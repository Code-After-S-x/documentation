import { defineConfig } from "vitepress";
import { getSidebar } from "vitepress-plugin-auto-sidebar";

var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  lang: "en-US",
  title: "CAS - Documentation",
  description:
    "This page is the documentation for our script that we are creating, you can found their tips and tutorials on how to use scripting API, edit configuration and more",
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/cas.png" },
    ],
  ],
  themeConfig: {
    logo: "/cas.png",
    siteTitle: "CAS - Documentation",
    outline: "deep",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
      { text: "Team", link: "/team" },
    ],

    sidebar: {
      /*"/docs/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["."],
        collapsible: true,
        collapsed: false,
      }),*/
      "/docs": getSidebar({
        contentRoot: "./",
        contentDirs: ["docs"],
        collapsible: true,
        collapsed: true,
      }),
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/QxjVKBEqXX" },
      { icon: "youtube", link: "https://www.youtube.com/@codeaftersex" },
      {
        icon: {
          svg: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3596 8.27L22.0696 5.5C21.6496 2.48 20.2796 1.25 17.3497 1.25H14.9896H13.5097H10.4697H8.98965H6.58965C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C6.89965 12.75 8.10965 12.12 8.86965 11.11C9.54965 12.12 10.7097 12.75 11.9997 12.75C13.2896 12.75 14.4197 12.15 15.1096 11.15C15.8797 12.14 17.0696 12.75 18.3096 12.75C19.6396 12.75 20.8396 12.16 21.5896 11.12C22.1896 10.32 22.4597 9.31 22.3596 8.27Z" fill="var(--vp-c-text-2)"/><path d="M11.3491 16.6602C10.0791 16.7902 9.11914 17.8702 9.11914 19.1502V21.8902C9.11914 22.1602 9.33914 22.3802 9.60914 22.3802H14.3791C14.6491 22.3802 14.8691 22.1602 14.8691 21.8902V19.5002C14.8791 17.4102 13.6491 16.4202 11.3491 16.6602Z" fill="var(--vp-c-text-2)"/><path d="M21.3709 14.3981V17.3781C21.3709 20.1381 19.1309 22.3781 16.3709 22.3781C16.1009 22.3781 15.8809 22.1581 15.8809 21.8881V19.4981C15.8809 18.2181 15.4909 17.2181 14.7309 16.5381C14.0609 15.9281 13.1509 15.6281 12.0209 15.6281C11.7709 15.6281 11.5209 15.6381 11.2509 15.6681C9.47086 15.8481 8.12086 17.3481 8.12086 19.1481V21.8881C8.12086 22.1581 7.90086 22.3781 7.63086 22.3781C4.87086 22.3781 2.63086 20.1381 2.63086 17.3781V14.4181C2.63086 13.7181 3.32086 13.2481 3.97086 13.4781C4.24086 13.5681 4.51086 13.6381 4.79086 13.6781C4.91086 13.6981 5.04086 13.7181 5.16086 13.7181C5.32086 13.7381 5.48086 13.7481 5.64086 13.7481C6.80086 13.7481 7.94086 13.3181 8.84086 12.5781C9.70086 13.3181 10.8209 13.7481 12.0009 13.7481C13.1909 13.7481 14.2909 13.3381 15.1509 12.5981C16.0509 13.3281 17.1709 13.7481 18.3109 13.7481C18.4909 13.7481 18.6709 13.7381 18.8409 13.7181C18.9609 13.7081 19.0709 13.6981 19.1809 13.6781C19.4909 13.6381 19.7709 13.5481 20.0509 13.4581C20.7009 13.2381 21.3709 13.7181 21.3709 14.3981Z" fill="var(--vp-c-text-2)"/></svg>',
        },
        link: "https://cas.tebex.io",
      },
    ],

    footer: {
      //message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2024 CAS",
    },
  },
});
