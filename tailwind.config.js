/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ig: {
                    primary: '#E1306C',
                    secondary: '#833AB4',
                    tertiary: '#C13584',
                    quaternary: '#F77737',
                    quinary: '#FCAF45',
                    link: '#00376B',
                    background: '#FAFAFA',
                    text: '#262626',
                    'dark-background': '#000000',
                    'dark-text': '#FAFAFA',
                    'dark-secondary': '#262626',
                }
            },
            backgroundImage: {
                'ig-gradient': 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
            }
        },
    },
    plugins: [],
}
