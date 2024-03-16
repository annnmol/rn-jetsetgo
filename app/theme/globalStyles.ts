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
  appScreen: {
    paddingVertical: CONSTANTS.spacingM,
    paddingHorizontal: CONSTANTS.spacing,
    backgroundColor: THEME.GRAY,
    flex: 1,
  },
});

export default globalStyles;
