import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
			sm: "481px",
			md: "769px",
			lg: "1081px",
			mlg: "1201px",
			xl: "1441px",
		},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "blue-100": "#ccffff",
        "blue-200": "#99ffff",
        "blue-300": "#66ffff",
        "blue-400": "#33ffff",
        "blue-500": "#00ffff",
        "blue-600": "#00cccc",
        "blue-700": "#009999",
        "blue-800": "#006666",
        "blue-900": "#003333",

        "black-100": "#d4d4d5",
        "black-200": "#a9a9aa",
        "black-300": "#7e7e80",
        "black-400": "#535355",
        "black-500": "#28282b",
        "black-600": "#202022",
        "black-700": "#18181a",
        "black-800": "#101011",
        "black-900": "#080809",
        "shadow-black":"rgba(40,40,43,0)"
      },
      fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
    },
  },
  plugins: [],
}
export default config
