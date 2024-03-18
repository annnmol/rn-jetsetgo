import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

//user defined components
import { THEME } from "@/theme/theme";
import HomeNavigator from "./home-navigator";
import ProfileNavigator from "./profile-navigator";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: THEME.PRIMARY,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          letterSpacing: 0.5,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          paddingBottom: 6,
          paddingTop: 4,
        },

        //header
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="home-tab"
      
      // tabBarAccessibilityLabel={"bottom-tabs-navigator"}
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
