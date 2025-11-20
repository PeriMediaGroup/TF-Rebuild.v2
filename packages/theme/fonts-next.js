import localFont from "next/font/local";

// ----------------------------
// BLACK OPS ONE
// ----------------------------
export const blackOpsOne = localFont({
  src: [
    { path: "./fonts/BlackOpsOne/BlackOpsOne-Regular.ttf", weight: "400" }
  ],
  variable: "--font-blackopsone"
});

// ----------------------------
// TOMORROW (FULL FAMILY)
// ----------------------------
export const tomorrow = localFont({
  src: [
    { path: "./fonts/Tomorrow/Tomorrow-Thin.ttf", weight: "100" },
    { path: "./fonts/Tomorrow/Tomorrow-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-ExtraLight.ttf", weight: "200" },
    { path: "./fonts/Tomorrow/Tomorrow-ExtraLightItalic.ttf", weight: "200", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-Light.ttf", weight: "300" },
    { path: "./fonts/Tomorrow/Tomorrow-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-Regular.ttf", weight: "400" },
    { path: "./fonts/Tomorrow/Tomorrow-Italic.ttf", weight: "400", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-Medium.ttf", weight: "500" },
    { path: "./fonts/Tomorrow/Tomorrow-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Tomorrow/Tomorrow-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-Bold.ttf", weight: "700" },
    { path: "./fonts/Tomorrow/Tomorrow-BoldItalic.ttf", weight: "700", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-ExtraBold.ttf", weight: "800" },
    { path: "./fonts/Tomorrow/Tomorrow-ExtraBoldItalic.ttf", weight: "800", style: "italic" },

    { path: "./fonts/Tomorrow/Tomorrow-Black.ttf", weight: "900" },
    { path: "./fonts/Tomorrow/Tomorrow-BlackItalic.ttf", weight: "900", style: "italic" }
  ],
  variable: "--font-tomorrow"
});
