/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            oswald: `"Oswald", sans-serif;`,
            didact: `"Didact Gothic", sans-serif;`,
         },
         backgroundColor: {
            ourGold: "#8E6D45",
            ourBlack: "#1E1E1E",
         },
         textColor: {
            ourGold: "#8E6D45",
            navItemAsh: "#888888",
            ourAsh: "#999999",
         },
      },
   },
   plugins: [require("daisyui")],
};
