import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { enableScreens } from "react-native-screens"; 

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
