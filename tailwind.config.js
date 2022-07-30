/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-secondary-1" : "var(--accent-secondary-1)",
				"accent-secondary-2" : "var(--accent-secondary-2)",
				"accent-primary-1" : "var(--accent-primary-1)",
				"accent-primary-2" : "var(--accent-primary-2)",
				"accent-primary-3" : "var(--accent-primary-3)",
				"accent-primary-4" : "var(--accent-primary-4)",
			},
		},
	},
	plugins: [],
};
