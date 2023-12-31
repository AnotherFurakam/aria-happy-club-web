/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				purple: "#872AB9",
				green: "#49DF61",
				smoke: "#F8F5F5"
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
