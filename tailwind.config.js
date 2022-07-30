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
				"text-1" : "var(--text-1)",
				"text-2" : "var(--text-2)",
				"text-1-dark" : "var(--text-1-dark)",
				"text-2-dark" : "var(--text-2-dark)",
				"background-1" : "var(--background-1)",
				"background-2" : "var(--background-2)",
				"background-1-dark" : "var(--background-1-dark)",
				"background-2-dark" : "var(--background-2-dark)",
			},
		},
	},
	plugins: [],
};
