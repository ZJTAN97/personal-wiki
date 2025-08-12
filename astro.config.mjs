// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "./public/favicon.ico",
      plugins: [starlightAutoSidebar()],
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
          label: "Blog",
          collapsed: true,
          autogenerate: { directory: "blogs" },
        },
      ],
    }),
  ],
});
