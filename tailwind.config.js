/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html'],
	future: { hoverOnlyWhenSupported: true },
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				grey: '#969696',
				birch: '#2b2b2b',
			},
			zIndex: {
				500: 500,
			},
			fontSize: {
				xxs: '10px',
			},
			lineHeight: {
				2: '12px',
			},
		},
	},
};
