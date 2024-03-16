import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//user defined components
import BottomTabsNavigator from "./bottom-tabs-navigator";
import AuthNavigator from "./auth-navigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabsNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
