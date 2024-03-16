import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useShallow } from "zustand/react/shallow";

import useAppStore from "@/store/app-store";

const HomeScreen = () => {
  const authSession = useAppStore(useShallow((state) => state.authSession));

  console.log(
    `🚀 ~ file: home-screen.tsx:11 ~ HomeScreen ~ authSession:`,
    authSession
  );

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131CCF",
  },
});
