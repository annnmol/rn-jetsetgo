import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { enableScreens } from "react-native-screens";
import { useShallow } from "zustand/react/shallow";

import AuthNavigator from "@/routes/auth-navigator";
import BottomTabsNavigator from "@/routes/bottom-tabs-navigator";
import useAppStore from "@/store/app-store";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

enableScreens(); // Enable the use of screens

let IS_APP_LOADING = true;

const unsub = useAppStore.persist.onFinishHydration((state) => {
  console.log('hydration finished');
  IS_APP_LOADING = false;
  SplashScreen.hideAsync();
  unsub();
})
export default function App() {
  const authSession = useAppStore(useShallow((state) => state.authSession));
  return (
    <Fragment>
      <StatusBar style="auto" animated networkActivityIndicatorVisible={true} />
      <NavigationContainer>
      {authSession?.email ? <BottomTabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    </Fragment>
  );
}
