import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

//user defined components
import { TYPOGRAPHY } from "@/theme/theme";

interface Props extends React.ComponentProps<typeof Text> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "button1"
    | "button2"
    | "button3"
    | "body1"
    | "body2"
    | "body3";
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppText: React.FC<Props> = ({
  variant = "body2",
  style,
  children,
  ...otherProps
}) => {
  const variantBaseStyle: any = TYPOGRAPHY?.[variant];

  return (
    <Text style={[variantBaseStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
