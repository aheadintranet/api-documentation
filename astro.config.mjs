import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Profile Import docs',
			favicon: '/src/assets/ahead_a.svg',
			logo: {
				light: '/src/assets/ahead--light.png',
				dark: '/src/assets/ahead--dark.png',
			},
			social: {
				linkedin: 'https://www.linkedin.com/company/aheadintranet/',
				github: 'https://github.com/aheadintranet/people-profile-import',
				email: 'mailto:support@aheadintranet.com',
			},
			sidebar: [
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				}
			],
		}),
	],
});
