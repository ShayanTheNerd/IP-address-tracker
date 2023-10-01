/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html'],
	future: { hoverOnlyWhenSupported: true },
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
