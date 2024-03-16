import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//user defined components
import HomeTabNavigator from "./home-tab-navigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
     <HomeTabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
