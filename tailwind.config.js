/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Pink: "hsl(322, 100%, 66%)",
                VerPaleCyan: "hsl(193, 100%, 96%)",
                VeryDarkCyan: "hsl(192, 100%, 9%)",
                GrayishBlue: "hsl(208, 11%, 55%)",
            },
            fontFamily: {
                poppins: "poppins",
            },
            backgroundImage: {
                fundoDesktop: "url('./src/assets/images/bg-hero-desktop.svg')",
                fundoMobile: "url('./src/assets/images/bg-hero-mobile.svg')",
            },
        },
    },
    plugins: [],
};
