// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightThemeNext from "starlight-theme-next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "./public/favicon.ico",
      plugins: [starlightAutoSidebar(), starlightThemeNext()],
      customCss: ["./src/styles/logo.css"],
      title: "",
      logo: {
        src: "./src/assets/quby.png",
        replacesTitle: true,
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/ZJTAN97" },
      ],
      sidebar: [
        {
          label: "React",
          collapsed: true,
          autogenerate: { directory: "react" },
        },
        {
          label: "HTML",
          collapsed: true,
          autogenerate: { directory: "html" },
        },
        {
          label: "JavaScript",
          collapsed: true,
          autogenerate: { directory: "javascript" },
        },
        {
          label: "TypeScript",
          collapsed: true,
          autogenerate: { directory: "typescript" },
        },
        {
          label: "Data Structures & Algorithms",
          collapsed: true,
          autogenerate: { directory: "dsa" },
        },
      ],
    }),
  ],
});
