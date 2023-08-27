/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        green: "#3DB68A",
        blue: "#2196F3",
        red: "#D32F2F",
      },
      colors: {
        textColor: "#000000",
        textNavbar: "#FFFFFF",
      },
      fontSize: {
        48: "48px",
        24: "24px",
        20: "20px",
        14: "14px",
        125: "125px",
        56: "56px",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      fontWeight: {
        fontBold: "400",
        fontLong: "500",
      },
    },
  },
  plugins: [],
};
