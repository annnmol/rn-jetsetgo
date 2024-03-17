import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

//user defined components
import {THEME } from "@/theme/theme";
import AppText from "../shared/AppText";

interface Props extends React.ComponentProps<typeof Text> {
  children?: string;
  style?: StyleProp<TextStyle>;
  [otherProps: string]: any;
}

const AppFormLabel = ({ children, style, ...otherProps }: Props) => {
  if (!children) return null;

  return (
    <AppText
      style={[styles.labelText, style]}
      variant="body1"
      {...otherProps}
    >
      {children}
    </AppText>
  );
};

export default AppFormLabel;

const styles = StyleSheet.create({
  labelText: {
    color: THEME.DARK_GRAY,
  },
});
