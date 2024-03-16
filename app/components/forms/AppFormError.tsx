import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

//user defined components
import { THEME } from "@/theme/theme";
import AppText from "../shared/AppText";

interface Props extends React.ComponentProps<typeof Text> {
  error?: string;
  style?: StyleProp<TextStyle>;
  [otherProps: string]: any;
}

const AppFormError = ({
  error,
  style,
  ...otherProps
}: Props) => {
  if (!error || typeof error !== "string") return null;

  return (
    <AppText style={[styles.errorText, style]} variant="body2" {...otherProps}>
      {error}
    </AppText>
  );
};

export default AppFormError;

const styles = StyleSheet.create({
  errorText: {
    color: THEME.DANGER,
    fontSize: 14,
    marginLeft: 2,
  },
});
