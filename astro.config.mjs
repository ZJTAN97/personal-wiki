// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightImageZoom from "starlight-image-zoom";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    starlight({
      favicon: "./public/favicon.ico",
      plugins: [
        starlightAutoSidebar(),
        starlightUtils({
          multiSidebar: {
            switcherStyle: "hidden",
          },
        }),
        starlightImageZoom(),
      ],
      title: "Home",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/ZJTAN97" },
        {
          icon: "open-book",
          label: "Data Structures & Algorithms",
          href: "/dsa/arrays/general-guide/",
        },
        {
          icon: "document",
          label: "General Learnings",
          href: "/html/elements/base/",
        },
      ],
      sidebar: [
        {
          label: "Data Structures & Algorithms",
          collapsed: true,
          autogenerate: { directory: "dsa", collapsed: true },
        },
        {
          label: "Wiki",
          collapsed: true,
          items: [
            {
              label: "HTML",
              collapsed: true,
              autogenerate: { directory: "html", collapsed: true },
            },
            {
              label: "CSS",
              collapsed: true,
              autogenerate: { directory: "css", collapsed: true },
            },
            {
              label: "JavaScript",
              collapsed: true,
              autogenerate: { directory: "javascript", collapsed: true },
            },
            {
              label: "TypeScript",
              collapsed: true,
              autogenerate: { directory: "typescript", collapsed: true },
            },
            {
              label: "React",
              collapsed: true,
              autogenerate: { directory: "react", collapsed: true },
            },
          ],
        },
      ],
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
