import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://aheadintranet.github.io",
  // somehow we ended up in the situation that this line is necessary for production
  // but bad for development
  base: import.meta.env.PROD ? "/api-documentation" : undefined,
  integrations: [
    starlight({
      title: "API Documentation",
      favicon: "/src/assets/ahead_a.svg",
      logo: {
        light: "/src/assets/ahead--light.png",
        dark: "/src/assets/ahead--dark.png",
      },
      social: {
        linkedin: "https://www.linkedin.com/company/aheadintranet/",
        github: "https://github.com/aheadintranet/api-documentation",
        email: "mailto:support@aheadintranet.com",
      },
      sidebar: [
        {
          label: "General",
          items: [
            {
              label: "Authorize requests with ahead's API-keys",
              link: "api-keys",
            },
          ],
        },
        {
          label: "Profile Import",
          items: [
            {
              label: "Reference",
              collapsed: true,
              autogenerate: { directory: "people-import/reference" },
            },
            {
              label: "Guides",
              collapsed: true,
              autogenerate: { directory: "people-import/guides" },
            },
          ],
        },
        {
          label: "Ask ahead import",
          autogenerate: { directory: "askahead-import/" },
        },
        {
          label: "Kiosk",
          autogenerate: { directory: "kiosk/" },
        },
        {
          label: "Activities",
          autogenerate: { directory: "activities/" },
        },
        {
          label: "External Notifications",
          autogenerate: { directory: "notifications/" },
        },
      ],
    }),
  ],
});
