/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#0f172a",
                    secondary: "#f97316", // A more vibrant orange
                    accent: "#3b82f6",
                }
            }
        },
    },
    plugins: [],
}