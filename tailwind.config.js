/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-secondary-1" : "#7DD1EB",
				"accent-secondary-2" : "#7d9bd6",
				"accent-tertiary-1" : "#9F8CD7",
				"text-1" : "#000",
				"text-2" : "#315870",
				"text-1-dark" : "#F0F0F0",
				"text-2-dark" : "#bed9eb",
				"background-1" : "#FFF",
				"background-2" : "#FFF",
				"background-1-dark" : "#212121",
				"background-2-dark" : "#424242",
			},
		},
	},
	plugins: [],
};
