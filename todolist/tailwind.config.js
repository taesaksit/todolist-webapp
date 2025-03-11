/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontSize: {
          "2xs": "0.625rem", // กำหนดขนาด 10px (1rem เท่ากับ 16px ปกติ)
          "3xs": "0.55rem", // กำหนดขนาด 10px (1rem เท่ากับ 16px ปกติ)
        },
        screens: {
          ipad: "800px",
          laptop: "1200px",
          tv: "1700px",
        },
       
      },
    },
    plugins: [],
  };