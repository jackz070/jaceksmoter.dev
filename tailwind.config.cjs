module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        dynamicXL: "clamp(2.827rem, 2.1748rem + 2.8985vw, 5.653rem);",
        xl: "clamp(1rem, 0.9045rem + 0.4246vw, 1.414rem);",
      },
      colors: {
        myWhite: "#fef8f5",
        myLightGray: "#cddee1",
        myBlue: "#2a23fa",
        myOrange: "#e8421c",
        myCyan: "#7ff9ff",
        myGreen: "#6cbd4b",
        myBlack: "#010303",
      },
      keyframes: {
        circleMove1: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%) scale(150%)",
          },
          "50%": { transform: "translateX(100%) translateY(50%) scale(120%)" },
          "70%": { transform: "translateX(120%) translateY(80%)scale(150%)" },
        },
        circleMove2: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(100%) scale(80%)",
          },
          "50%": { transform: "translateX(40%) translateY(50%) scale(140%)" },
          "70%": { transform: "translateX(130%) translateY(80%) scale(200%)" },
        },
        circleMove3: {
          "0%, 100%": {
            transform: "translateX(100%) translateY(60%) scale(150%)",
          },
          "50%": { transform: "translateX(80%) translateY(0%) scale(100%)" },
          "70%": { transform: "translateX(130%) translateY(80%) scale(80%)" },
        },
        circleMove4: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%) scale(150%)",
          },
          "50%": { transform: "translateX(20%) translateY(40%) scale(100%)" },
          "70%": { transform: "translateX(40%) translateY(50%) scale(80%)" },
        },
        circleMove5: {
          "0%": {
            transform: "translateX(-20%) translateY(-20%) scale(100%)",
          },
          "40%": { transform: "translateX(0%) translateY(20%) scale(120%)" },
          "75%": { transform: "translateX(20%) translateY(20%) scale(110%)" },
          "100%": {
            transform: "translateX(0%) translateY(0%) scale(100%)",
          },
        },
      },
      animation: {
        circleMove1: "circleMove1 infinite 30s ease-in-out",
        circleMove2: "circleMove2 infinite 20s ease-in-out",
        circleMove3: "circleMove3 infinite 30s ease-in-out",
        circleMove4: "circleMove4 infinite 40s ease-in-out",
        circleMove5: "circleMove5 infinite 20s ease-in-out",
      },
    },
    fontFamily: { sans: ['"Open Sans"'], serif: ["Domine"] },
    fontSize: {
      xs: "0.5rem",
      sm: "0.707rem",
      base: "1rem",
      xl: "1.414rem",
      "2xl": "1.999rem",
      "3xl": "2.827rem",
      "4xl": "3.998rem",
      "5xl": "5.653rem",
    },
  },
  plugins: [],
};
