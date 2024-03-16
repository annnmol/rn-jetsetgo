import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

//user defined components
import AppText from "@/components/shared/AppText";
import { THEME } from "@/theme/theme";

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  textStyle?: StyleProp<any>;
  variant?: "outline" | "primary" | "text";
  textVariant?: "button1" | "button2" | "button3";
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  children: React.ReactNode;
  [otherProps: string]: any;
}

const AppButton: React.FC<Props> = ({
  style,
  textStyle,
  variant = "primary",
  textVariant = "button1",
  children,
  onPress,
  ...otherProps
}) => {
  if (variant === "outline")
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.9}
        style={[styles.outlineButton, style && style]}
        {...otherProps}
      >
        <AppText style={[styles.textOutline, textStyle]} variant={textVariant}>
          {children}
        </AppText>
      </TouchableOpacity>
    );

  if (variant === "text")
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.9}
        style={[styles.textButton, style && style]}
        {...otherProps}
      >
        <AppText style={[styles.text, {textDecorationLine: 'underline'},textStyle]} variant={textVariant}>
          {children}
        </AppText>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.9}
      style={[styles.primaryButton, style && style]}
      {...otherProps}
    >
      <AppText style={[styles.text, textStyle]} variant={textVariant}>
        {children}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  //heading
  //* primary btn

  text: {
    color: "rgba(255,255,255,0.9)",
  },
  textOutline: {
    color: THEME.ACCENT
  },

  primaryButton: {
    backgroundColor: THEME.PRIMARY,
    width: "100%",
    height: 44,
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  //*outline
  outlineButton: {
    borderColor: THEME.ACCENT,
    borderWidth: 1,
    width: "100%",
    height: 44,
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    width: "100%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    textAlign: "center",
  },
});
