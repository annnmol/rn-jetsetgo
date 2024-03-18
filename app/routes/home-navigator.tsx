import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//user defined components
import HomeScreen from "@/screens/home-tab/home-screen";
import DetailsScreen from "@/screens/home-tab/details-screen";
import SearchScreen from "@/screens/home-tab/search-screen";
import ViewOrderScreen from "@/screens/home-tab/view-order-screen";
import CitySearchScreen from "@/screens/home-tab/city-search-screen";
import { CONSTANTS, THEME } from "@/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import FiltersScreen from "@/screens/home-tab/filters-screen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"home-screen"}
      screenOptions={{
        headerShown: true,
        headerTintColor: THEME.WHITE,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
          color: THEME.WHITE,
        },
        headerStyle: {
          backgroundColor: THEME.PRIMARY,
          height: 90,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          presentation: "card",
          headerShown: true,
          title: "JetSetGo",
          headerRight: ({ tintColor }) => (
            <Ionicons
              name="notifications-outline"
              size={20}
              color={tintColor}
              style={{ marginRight: CONSTANTS.spacing }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="city-search-screen"
        component={CitySearchScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          title: "Search for a city",
        }}
      />
      <Stack.Screen
        name="search-screen"
        component={SearchScreen}
        options={{ presentation: "modal", headerShown: true }}
      />
      <Stack.Screen
        name="filters-screen"
        component={FiltersScreen}
        options={{ presentation: "modal", headerShown: true, headerTitle: "Customize your results"}}
      />
      <Stack.Screen name="details-screen" component={DetailsScreen} />
      <Stack.Screen
        name="view-order-screen"
        component={ViewOrderScreen}
        options={{ presentation: "modal", headerShown: true, title: "Order Details"}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
