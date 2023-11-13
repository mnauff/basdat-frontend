/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        variants: {
            extend: {
                transform: ['hover', 'focus'],
                scale: ['active', 'hover'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
