module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#2980b9',
				body: '#393e46'
			},
			fontFamily: {
				ubuntu: ['Ubuntu']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
