/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Single Colors
        violet: "var(--violet)",
        hoverBlue: "var(--hover-blue)",

        // Linear Colors
        plumLight: "var(--plum-light)",
        plumDark: "var(--plum-dark)",

        orangeLight: "var(--orange-light)",
        orangeDark: "var(--orange-dark)",

        hotPinkLight: "var(--hot-pink-light)",
        hotPinkDark: "var(--hot-pink-dark)",

        softBrownLight: "var(--soft-brown-light)",
        softBrownDark: "var(--soft-brown-dark)",

        skyBlueLight: "var(--sky-blue-light)",
        skyBlueDark: "var(--sky-blue-dark)",

        mustardYellowLight: "var(--mustard-yellow-light)",
        mustardYellowDark: "var(--mustard-yellow-dark)",

        oliveLight: "var(--olive-light)",
        oliveDark: "var(--olive-dark)",

        peachLight: "var(--peach-light)",
        peachDark: "var(--peach-dark)",

        midnightBlueLight: "var(--midnight-blue-light)",
        midnightBlueDark: "var(--midnight-blue-dark)",

        mutedPurpleLight: "var(--muted-purple-light)",
        mutedPurpleDark: "var(--muted-purple-dark)",

        matteBlueLight: "var(--matte-blue-light)",
        matteBlueDark: "var(--matte-blue-dark)",

        aquaLight: "var(--aqua-light)",
        aquaDark: "var(--aqua-dark)",

        tealGreenLight: "var(--teal-green-light)",
        tealGreenDark: "var(--teal-green-dark)",

        pinkLight: "var(--pink-light)",
        pinkDark: "var(--pink-dark)",

        // Gradient Colors
        purpleDark: "var(--purple-dark)",
        purpleMid: "var(--purple-mid)",
        purpleLight: "var(--purple-light)",

        greenDark: "var(--green-dark)",
        greenMid: "var(--green-mid)",
        greenLight: "var(--green-light)",

        blueDark: "var(--blue-dark)",
        blueMid: "var(--blue-mid)",
        blueLight: "var(--blue-light)",

        redDark: "var(--red-dark)",
        redMid: "var(--red-mid)",
        redLight: "var(--red-light)",

        greyDark: "var(--grey-dark)",
        greyMid: "var(--grey-mid)",
        greyLight: "var(--grey-light)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
