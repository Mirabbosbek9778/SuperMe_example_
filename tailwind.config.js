/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navbarColor: "#3DB68A",
        btnColor: "#2196F3",
        delBtnColor: "#D32F2F",
      },
      colors: {
        textColor: "#000000",
        textNavbar: "#FFFFFF",
      },
      fontSize: {
        fontSize: "48px",
        fontInfo: "24px",
        fontNavbar: "20px",
        fontDefault: "14px",
        btnWidth: "125px",
        btnHight: "56px",
      },
      fontFamily: {
        fontFamily: "Roboto",
      },
      fontWeight: {
        fontBold: "400",
        fontLong: "500",
      },
    },
  },
  plugins: [],
};
