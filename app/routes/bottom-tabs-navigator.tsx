import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//user defined components
import HomeNavigator from "./home-navigator";
import ProfileNavigator from "./profile-navigator";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.customTabBarStyle,
        tabBarLabelStyle: styles.customTabBarLabelStyle,
      }}
      initialRouteName="home-tab"
    >
      <Tab.Screen
        name="home-tab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="profile-tab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "account-circle" : "account-circle-outline"}
              size={22}
              color={color}
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  customTabBarStyle: {
    borderTopWidth: 0,
    paddingBottom: 6,
    paddingTop: 4,
  },

  customTabBarLabelStyle: {
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
