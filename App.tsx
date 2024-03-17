import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Fragment, useEffect, useState } from "react";
import { enableScreens } from "react-native-screens";
import { useShallow } from "zustand/react/shallow";

import AuthNavigator from "@/routes/auth-navigator";
import BottomTabsNavigator from "@/routes/bottom-tabs-navigator";
import useAppStore from "@/store/app-store";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

enableScreens(); // Enable the use of screens

export default function App() {
  const authSession = useAppStore(useShallow((state) => state.authSession));
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const unsub = useAppStore.persist.onFinishHydration((state) => {
      console.log("presist storage hydration finished");
      SplashScreen.hideAsync();
      setIsAppLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  if (isAppLoading) return null;

  return (
    <Fragment>
      <StatusBar
        style={authSession?.email ? "light" : "dark"}
        animated
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        {authSession?.email ? <BottomTabsNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Fragment>
  );
}
