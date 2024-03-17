import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

//user defined components
import { CONSTANTS, THEME } from "@/theme/theme";
import HomeNavigator from "./home-navigator";
import ProfileNavigator from "./profile-navigator";
import AppText from "@/components/shared/AppText";

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
          title: "JetSetGo",
          headerRight: ({ tintColor }) => (
            <Ionicons
              name="notifications-outline"
              size={20}
              color={tintColor}
              style={{  marginRight: CONSTANTS.spacing, }}
            />
          ),
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
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
