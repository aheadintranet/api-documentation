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
      social: [
        { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/aheadintranet/" },
        { icon: "github", label: "GitHub", href: "https://github.com/aheadintranet/api-documentation" },
        { icon: "email", label: "Email", href: "mailto:support@aheadintranet.com" },
      ],
      sidebar: [
        {
          label: "General",
          items: [
            {
              label: "Authorize requests with ahead's API-keys",
              link: "api-keys",
            },
            {
              label: "Apply Targeting to API-based imports",
              link: "targeting",
            },
          ],
        },
        {
          label: "Activities",
          items: [{ autogenerate: { directory: "activities/" } }],
        },
        {
          label: "Ask ahead import",
          items: [{ autogenerate: { directory: "askahead-import/" } }],
        },
        {
          label: "External Notifications",
          items: [{ autogenerate: { directory: "notifications/" } }],
        },
        {
          label: "Course participation",
          items: [{ autogenerate: { directory: "course-participation/" } }],
        },
        {
          label: "Events Import",
          items: [{ autogenerate: { directory: "events-import/" } }],
        },
        {
          label: "Kiosk",
          items: [{ autogenerate: { directory: "kiosk/" } }],
        },
        {
          label: "Profile Import",
          items: [
            {
              label: "Reference",
              collapsed: true,
              items: [{ autogenerate: { directory: "people-import/reference" } }],
            },
            {
              label: "Guides",
              collapsed: true,
              items: [{ autogenerate: { directory: "people-import/guides" } }],
            },
          ],
        }
      ],
    }),
  ],
});
