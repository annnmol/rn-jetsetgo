import "react-native-gesture-handler";
import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens"; // Import enableScreens

import Providers from "@/lib/providers";
import RootNavigator from "@/routes/root-navigator";

enableScreens(); // Enable the use of screens

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" animated networkActivityIndicatorVisible={true} />
      <Providers>
        <RootNavigator />
      </Providers>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});
