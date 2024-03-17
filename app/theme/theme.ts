import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

export const THEME = {
    PRIMARY: "#01147C",
    ACCENT: "#FFC107",
    SECONDARY: "#06B2FF",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#BDBDBD",
    LIGHT_GRAY: "#Fff",
    DARK_GRAY: "#333333",
    DANGER: "#FF0000",
    SUCCESS: "#00FF00",
    WARNING: "#FDB35B",
    INFO: "#ADD8E6",
    TEXT: "rgba(0,0,0,0.87)",
    TEXT_LIGHT: "rgba(0,0,0,0.45)",
    TEXT_MEDIUM: "rgba(0,0,0,0.7)",
}


export const TYPOGRAPHY: any = {
    h1: {
        fontWeight: "600",
        fontSize: 32,
        letterSpacing: 1,
    },
    h2: {
        fontWeight: "600",
        fontSize: 28,
        letterSpacing: 1,
    },
    h3: {
        fontWeight: "600",
        fontSize: 24,
        letterSpacing: 1,
    },
    h4: {
        fontWeight: "600",
        fontSize: 20,
        letterSpacing: 1,
    },
    h5: {
        fontWeight: "600",
        fontSize: 17,
        letterSpacing: 1,
    },

    //buttons
    button1: {
        fontWeight: "500",
        fontSize: 17,
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    button2: {
        fontWeight: "500",
        fontSize: 17,
        letterSpacing: 1.5,
    },
    button3: {
        fontWeight: "500",
        fontSize: 16,
        letterSpacing: 1.5,
    },

    //body
    body1: {
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: 0.5,
    },
    body2: {
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.5,
    },
    body3: {
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.5,
    },
};

export const CONSTANTS = {
  spacingLXX: 32,
  spacingLX: 24,
  spacingL: 20,
  spacing: 16,
  spacingM: 12,
  spacingS: 8,
  spacingSX: 4,
  spacingSXX: 2,
  statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
  windowWidth: Dimensions.get("window").width,
  windowHeight: Dimensions.get("window").height,
  borderRadius: 8,
  borderWidth: StyleSheet.hairlineWidth,
};