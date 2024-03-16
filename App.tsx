import Providers from "@/lib/providers";
import HomeScreen from "@/screens/home-tab/home-screen";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Providers>
        <HomeScreen />
      </Providers>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});
