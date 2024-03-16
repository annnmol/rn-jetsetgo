import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "./theme";

const globalStyles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: CONSTANTS.spacingM,
  },
  paddingVertical: {
    paddingVertical: CONSTANTS.spacingM,
  },
  padding: {
    paddingVertical: CONSTANTS.spacingM,
    paddingHorizontal: CONSTANTS.spacingM,
    borderColor: THEME.DANGER,
    borderWidth: 2,
  },
  container: {
    paddingVertical: CONSTANTS.spacingM,
    paddingHorizontal: CONSTANTS.spacing,
    flex: 1,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginVertical: 1,
  },
});

export default globalStyles;
