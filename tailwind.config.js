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
			colors: {
				grey: '#969696',
				birch: '#2b2b2b',
			},
			opacity: {
				85: '0.85',
			},
		},
	},
};
