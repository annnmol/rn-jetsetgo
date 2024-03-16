import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "@/components/shared/AppText";

interface Props {
  title: string;
  subTitle?: string;
  Icon:
    | "email-outline"
    | "form-textbox-password"
    | "card-account-details-outline";
}

const AuthFormHeader = ({ Icon, title, subTitle }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <View style={styles.iconBorderBox}>
          <MaterialCommunityIcons
            name={Icon}
            size={20}
            color={THEME.TEXT_MEDIUM}
          />
        </View>
        <AppText variant="h5" style={styles.text}>
          •••
        </AppText>
      </View>
      <AppText variant="h4">{title}</AppText>
      {subTitle ? (
        <AppText
          variant="body1"
          style={[
            styles.text,
            {
              marginTop: CONSTANTS.spacingM,
            },
          ]}
        >
          {subTitle}
        </AppText>
      ) : null}
    </View>
  );
};

export default AuthFormHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: CONSTANTS.spacingL,
    paddingHorizontal: CONSTANTS.spacingSX,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: CONSTANTS.spacingS,
    marginBottom: CONSTANTS.spacing,
  },
  iconBorderBox: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: THEME.TEXT_MEDIUM,
  },
  text: {
    color: THEME.TEXT_MEDIUM,
  },
});
