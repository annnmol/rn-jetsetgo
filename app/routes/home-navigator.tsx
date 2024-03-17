import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//user defined components
import HomeScreen from "@/screens/home-tab/home-screen";
import DetailsScreen from "@/screens/home-tab/details-screen";
import SearchScreen from "@/screens/home-tab/search-screen";
import ViewOrderScreen from "@/screens/home-tab/view-order-screen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"home-screen"}>
      <Stack.Screen
        name="home-screen"
        component={HomeScreen}
        options={{ presentation: "card", headerShown: false, }}
      />
      <Stack.Screen name="search-screen" component={SearchScreen} options={{ presentation: "modal", headerShown: true }}/>
      <Stack.Screen name="details-screen" component={DetailsScreen} />
      <Stack.Screen name="view-order-screen" component={ViewOrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
