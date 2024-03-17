import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//user defined components
import UserAccountScreen from "@/screens/profile-tab/user-account-screen";
import { THEME } from "@/theme/theme";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
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
    }} initialRouteName={"user-account-screen"}>
      <Stack.Screen
        name="user-account-screen"
        component={UserAccountScreen}
        options={{ presentation: "card", headerShown: true, title: "Profile"}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
