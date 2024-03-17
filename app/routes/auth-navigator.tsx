import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//user defined components
import WelcomeScreen from "@/screens/auth-flow/welcome-screen";
import VerifyUserScreen from "@/screens/auth-flow/verify-user-screen";
import RegisterUserScreen from "@/screens/auth-flow/register-user-screen";
import LoginUserScreen from "@/screens/auth-flow/login-user-screen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"welcome-screen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome-screen" component={WelcomeScreen} />
      <Stack.Screen
        name="login-user-screen"
        component={LoginUserScreen}
        options={{ headerShown: true, title:"Login to your account", headerTitleAlign:"center"}}
      />
      <Stack.Screen
        name="register-user-screen"
        component={RegisterUserScreen}
        options={{ headerShown: true, title:"Create a new account", headerTitleAlign:"center" }}
      />
      <Stack.Screen
        name="view-user-screen"
        component={VerifyUserScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
