/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    // darkMode: 'selector',
    darkMode: ['selector', '[data-theme="dark"]'],
    plugins: [
        require('daisyui'),
        require('@tailwindcss/forms'),
    ],
}
