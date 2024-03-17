import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { THEME } from "@/theme/theme";

const AppActivityIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME.PRIMARY} />
    </View>
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: THEME.ACCENT,
    // ...StyleSheet.absoluteFillObject,
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF88",
  },
});
