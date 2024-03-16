import React, { Fragment, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import AppFormTextInput from "@/components/forms/AppFormTextField";
import AppButton from "@/components/shared/AppButton";
import AuthFormHeader from "@/components/auth/auth-form-header";
import globalStyles from "@/theme/globalStyles";
import { CONSTANTS, THEME } from "@/theme/theme";
import { validateEmail } from "@/lib/utils";
import useAppStore from "@/store/app-store";

interface Props {
  navigation: NavigationProp<any>;
}

const LoginUserScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setAuthSession = useAppStore(
    useShallow((state) => state.setAuthSession)
  );

  const handleBackBtn = () => {
    navigation.navigate("welcome-screen");
  };
  const handleLogin = (formData: IData) => {
    console.log("login clicked", { formData });
    setAuthSession(formData);
    navigation.navigate("welcome-screen");
    ToastAndroid.show("Logged In!", ToastAndroid.SHORT);
  };

  const handleNextBtn = () => {
    if (!email || !validateEmail(email)) {
      ToastAndroid.show("Please enter a valid email", ToastAndroid.SHORT);
      return;
    }

    if (password?.length < 6) {
      ToastAndroid.show(
        "Password should be at least 6 characters",
        ToastAndroid.SHORT
      );
      return;
    }

    handleLogin({ email, password });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior={"position"} style={{ flex: 1 }}>
        <AuthFormHeader
          title="Welcome Back!"
          subTitle="Good to see you again. Let's get you logged in."
          Icon="skull-scan-outline"
          key={"email"}
        />

        <View style={styles.fieldContainer}>
          <AppFormTextInput
            placeholder="anmol@hi2.in"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            onSubmitEditing={handleNextBtn}
          />
        </View>

        <View style={styles.fieldContainer}>
          <AppFormTextInput
            placeholder="123456"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            onSubmitEditing={handleNextBtn}
          />
        </View>
        <View style={[styles.fieldContainer, {}]}>
          <AppButton
            onPress={() => handleNextBtn()}
            textVariant="button2"
            variant="primary"
          >
            Login
          </AppButton>
          <AppButton
            onPress={handleBackBtn}
            textVariant="button2"
            variant="text"
          >
            Back
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginUserScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  fieldContainer: {
    flexDirection: "column",
    width: "100%",
    // gap: CONSTANTS.spacingLXX,
    paddingBottom: CONSTANTS.spacingS,
    marginBottom: CONSTANTS.spacingM,
  },
  divider: { ...globalStyles.divider, backgroundColor: THEME.LIGHT_GRAY },
});
