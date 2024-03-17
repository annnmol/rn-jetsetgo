import React from "react";
import { Linking, StyleSheet, View } from "react-native";

//user defined components
import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "../shared/AppText";

const HomeFooter = () => {
  return (
    <View style={styles.container}>
      <AppText variant="h2" style={styles.text}>
        JetSetGo
      </AppText>
      <AppText variant="body2" style={styles.text}>
        Crafted with ❤️ by{" "}
        <AppText
          variant="body2"
          style={{ color: "blue", textDecorationLine: "underline" }}
          onPress={() => {
            Linking.openURL("https://www.github.com/annnmol");
          }}
        >
          @annnmol
        </AppText>{" "}
        in Jaipur, India.
      </AppText>
    </View>
  );
};

export default HomeFooter;

const styles = StyleSheet.create({
  container: {
    paddingBottom: CONSTANTS.spacingL,
    gap: CONSTANTS.spacingSX,
  },
  text: {
    fontWeight: "600",
    color: THEME.GRAY,
  },
});
