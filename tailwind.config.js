/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './assets/**/*.{js,mjs}'],
	future: { hoverOnlyWhenSupported: true },
	safelist: [
		"aria-[current='true']:!bg-blue-500",
		"aria-[current='true']:!bg-green-500",
		"aria-[current='true']:!bg-yellow-400",
	],
};
