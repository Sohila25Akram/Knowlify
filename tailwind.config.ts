import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 20px 0px #0000001F',
      },
      fontSize: {
        heading: "1.875rem", // 30px
        large: "1.5rem", // 24px
        light: "1.25rem", // 20px
        buttonText: "1.125rem", // 18px
        default: "1rem", // 16px
        small: "0.875rem", // 14px
        verySmall: "0.75rem", // 12px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangeColor: "#F68422",
        betrolly: "#2084A2",
        whiteColor: "#FFFFFF",
        blackColor: "#000000",
        txtBox: "#F5F5F5",
        textInTxtBox: "#707070",
        greyText: "#999999",
        fadedLine: "#E3E3E3",
        success: "#19C433",
        failed: "#FF0000",
        lightOrange: "#FFECDB",
        lightBlue: "#EDF3FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
