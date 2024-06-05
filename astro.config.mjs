import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
              autogenerate: { directory: "people-import/reference" },
            },
            {
              label: "Guides",
              autogenerate: { directory: "people-import/guides" },
            },
          ],
        },
		{
			label: "Kiosk API",
			autogenerate: { directory: "kiosk/" },
		}
      ],
    }),
  ],
});
