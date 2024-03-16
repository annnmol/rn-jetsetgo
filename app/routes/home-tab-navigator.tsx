import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//user defined components
import HomeScreen from "@/screens/home-tab/home-screen";
import DetailsScreen from "@/screens/home-tab/details-screen";
import SearchScreen from "@/screens/home-tab/search-screen";
import ViewOrderScreen from "@/screens/home-tab/view-order-screen";

const Stack = createStackNavigator();

const HomeTabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"home-screen"}>
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="search-screen" component={SearchScreen} />
      <Stack.Screen name="details-screen" component={DetailsScreen} />
      <Stack.Screen name="view-order-screen" component={ViewOrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeTabNavigator;
