// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
            violet: colors.violet,
            cyan: colors.cyan,
            teal: colors.teal,
            blueGray: colors.blueGray,
            'turquoise': '#60A5FA',
            'sky': '#BAE6FD',
            'sky-700': '#1D4ED8',
            'cerulean': '#3B82F6'
        }
    }
}