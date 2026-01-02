// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightImageZoom from "starlight-image-zoom";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    starlight({
      components: {
        Sidebar: "./src/components/StarlightSidebar.astro",
      },
      favicon: "./public/favicon.ico",
      plugins: [starlightAutoSidebar(), starlightImageZoom()],
      customCss: ["./src/styles/global.css"],
      title: "Home",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/ZJTAN97" },
      ],
      sidebar: [
        {
          label: "React",
          collapsed: false,
          autogenerate: { directory: "react" },
        },
        {
          label: "HTML",
          collapsed: false,
          autogenerate: { directory: "html" },
        },
        {
          label: "CSS",
          collapsed: false,
          autogenerate: { directory: "css" },
        },
        {
          label: "JavaScript",
          collapsed: false,
          autogenerate: { directory: "javascript" },
        },
        {
          label: "TypeScript",
          collapsed: false,
          autogenerate: { directory: "typescript" },
        },
        {
          label: "DSA",
          collapsed: false,
          autogenerate: { directory: "dsa" },
        },
      ],
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
