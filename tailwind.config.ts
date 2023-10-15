import type {Config} from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    content: [],
    darkMode: "class",
    daisyui: {
        themes: [
            {
                dmLight: {
                    primary: "#00487c",
                    "primary-focus": "#00325c",
                    "primary-content": "#ffffff",
                    secondary: "#F8C630",
                    "secondary-focus": "#ECB309",
                    "secondary-content": "#ffffff",
                    accent: "#20A4F3",
                    "accent-focus": "#1B8CEA",
                    "accent-content": "#ffffff",
                    neutral: "#3d4451",
                    "neutral-focus": "#2a2e37",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#d1d5db",
                    "base-content": "#1f2937",
                },
                dmDark: {
                    primary: "#00487c",
                    "primary-focus": "#00325c",
                    "primary-content": "#ffffff",
                    secondary: "#F8C630",
                    "secondary-focus": "#ECB309",
                    "secondary-content": "#ffffff",
                    accent: "#20A4F3",
                    "accent-focus": "#1B8CEA",
                    "accent-content": "#ffffff",
                    neutral: "#3d4451",
                    "neutral-focus": "#2a2e37",
                    "neutral-content": "#ffffff",
                    "base-100": "#000000",
                    "base-200": "#1a202c",
                    "base-300": "#2d3748",
                    "base-content": "#ffffff",
                },
            }
        ],
    },
};
