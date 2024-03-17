import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//user defined components
import UserAccountScreen from "@/screens/profile-tab/user-account-screen";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"user-account-screen"}>
      <Stack.Screen
        name="user-account-screen"
        component={UserAccountScreen}
        options={{ presentation: "card", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
