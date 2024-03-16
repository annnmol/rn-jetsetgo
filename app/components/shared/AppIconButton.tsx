import React from "react";
import {
    GestureResponderEvent,
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  [otherProps: string]: unknown;
  onPress: (event: GestureResponderEvent) => void;
}

const AppIconButton: React.FC<Props> = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity
      style={[styles.iconButton, style && style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppIconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
});
