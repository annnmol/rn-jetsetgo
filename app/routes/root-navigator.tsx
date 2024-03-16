import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//user defined components
import BottomTabsNavigator from "./bottom-tabs-navigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
     <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
