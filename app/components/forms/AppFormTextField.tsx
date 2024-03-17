import React, { forwardRef } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle } from "react-native";

//user defined components
import { THEME } from "@/theme/theme";

interface Props extends React.ComponentProps<typeof TextInput> {
  style?: StyleProp<TextStyle>;
}

const AppFormTextInput = forwardRef<TextInput, Props>(
  ({ style, ...otherProps }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.inputField, style]}
        placeholderTextColor={styles.placeholder.color}
        {...otherProps}
      />
    );
  }
);

export default AppFormTextInput;

const styles = StyleSheet.create({
  inputField: {
    height: 44,
    backgroundColor: THEME.LIGHT_GRAY,
    borderRadius: 4,
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 16,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    color: THEME.TEXT,
    fontWeight: "600",
  },
  inputFieldFocused: {
    borderLeftWidth: 2,
    color: THEME.TEXT,
  },
  placeholder: {
    color: THEME.TEXT_LIGHT,
  },
});
