/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            display: "Rosaline"
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            colors: {
                primary: {
                    50: "#E7E7EE",
                    100: "#B4B4CA",
                    200: "#9090B1",
                    300: "#5D5D8D",
                    400: "#3D3D77",
                    500: "#0D0D55",
                    600: "#0C0C4D",
                    700: "#09093C",
                    800: "#07072F",
                    900: "#050524"
                },
                secondary: {
                    50: "#FAFCFF",
                    100: "#F0F6FF",
                    200: "#E9F2FF",
                    300: "#E0ECFF",
                    400: "#D9E9FF",
                    500: "#D0E3FF",
                    600: "#BDCFE8",
                    700: "#94A1B5",
                    800: "#727D8C",
                    900: "#575F6B"
                },
                tertiary: {
                    50: "#FFF3F5",
                    100: "#FDDAE1",
                    200: "#FDC8D3",
                    300: "#FCAFBF",
                    400: "#FB9FB2",
                    500: "#FA879F",
                    600: "#E47B91",
                    700: "#B26071",
                    800: "#8A4A57",
                    900: "#693943"
                }
            }
        }
    },
    plugins: []
};
