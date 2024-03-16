import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

//user defined components
import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "../shared/AppText";

interface Props extends React.ComponentProps<typeof Text> {
  error?: string;
  style?: StyleProp<TextStyle>;
  [otherProps: string]: any;
}

const AppFormLabel = ({ label, style, ...otherProps }: Props) => {
  if (!label) return null;

  return (
    <AppText
      style={[styles.labelText, style]}
      variant="h5"
      {...otherProps}
    >
      {label}
    </AppText>
  );
};

export default AppFormLabel;

const styles = StyleSheet.create({
  labelText: {
    color: THEME.DARK_GRAY,
    paddingLeft: CONSTANTS.spacingS,
  },
});
