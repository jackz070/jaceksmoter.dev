module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        dynamicXL: "clamp(3rem, 2.0769rem + 4.1026vw, 7rem);",
        xl: "clamp(1rem, 0.9045rem + 0.4246vw, 1.414rem);",
      },
      colors: {
        myWhite: "var(--color-white)",
        myLightGray: "#cddee1",
        myBlue: "#2a23fa",
        myOrange: "#e8421c",
        myCyan: "#7ff9ff",
        myGreen: "#6cbd4b",
        myBlack: "var(--color-black)",
      },
      keyframes: {
        circleMove1: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%) scale(120%)",
          },
          "50%": { transform: "translateX(100%) translateY(50%) scale(120%)" },
          "70%": { transform: "translateX(120%) translateY(80%) scale(120%)" },
        },
        circleMove2: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(80%) scale(100%)",
          },
          "50%": { transform: "translateX(40%) translateY(50%) scale(140%)" },
          "70%": { transform: "translateX(70%) translateY(80%) scale(200%)" },
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
          "0%, 100%": {
            transform: "translateX(-20%) translateY(-20%) scale(100%)",
          },
          "40%": { transform: "translateX(0%) translateY(20%) scale(120%)" },
          "75%": { transform: "translateX(20%) translateY(20%) scale(110%)" },
        },
        circleMove6: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%) scale(100%)",
          },
          "40%": { transform: "translateX(20%) translateY(20%) scale(120%)" },
          "75%": { transform: "translateX(40%) translateY(40%) scale(110%)" },
        },
      },
      animation: {
        circleMove1: "circleMove1 infinite 30s ease-in-out",
        circleMove2: "circleMove2 infinite 20s ease-in-out",
        circleMove3: "circleMove3 infinite 30s ease-in-out",
        circleMove4: "circleMove4 infinite 40s ease-in-out",
        circleMove5: "circleMove5 infinite 20s ease-in-out",
        circleMove6: "circleMove6 infinite 15s ease-in-out",
      },
    },
    fontFamily: {
      sans: ["Roboto"],
      serif: ["Domine"],
      mono: ["IBM Plex Mono"],
    },
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
