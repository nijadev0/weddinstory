/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				lg: '3rem',
				xl: '3rem'
			}
		},
		extend: {
			colors: {
				primary: '#E79078'
			},
			fontFamily: {
				dmSans: ['DM Sans', 'sans-serif'],
				playfair: ['Playfair Display', 'serif']
			},
			boxShadow: {
				carousel: '0px 18px 27px -11px rgba(18, 18, 18, 0.25)',
				iconArrow: '0px 6px 24px rgba(0, 0, 0, 0.15)',
				iconWhatsapp: '0px 6px 24px rgba(0, 0, 0, 0.15)'
			}
		}
	},
	plugins: []
};
