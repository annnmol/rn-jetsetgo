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

const RegisterUserScreen = ({ navigation }: Props) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formStep, setFormStep] = useState<number>(1);
  const setAuthSession = useAppStore(
    useShallow((state) => state.setAuthSession)
  );

  const handleBackBtn = () => {
    setFormStep(formStep - 1);
  };
  const handleSignUp = (formData: IData) => {
    setAuthSession(formData);
    navigation.navigate("welcome-screen");
    ToastAndroid.show("Amazing! New account created", ToastAndroid.SHORT);
  };

  const handleNextBtn = () => {
    if (formStep === 1 && fullName?.length < 4) {
      ToastAndroid.show("Please enter a valid name", ToastAndroid.SHORT);
      return;
    }

    if (formStep === 2 && (!email || !validateEmail(email))) {
      ToastAndroid.show("Please enter a valid email", ToastAndroid.SHORT);
      return;
    }

    if (formStep === 3 && password?.length < 6) {
      ToastAndroid.show(
        "Password should be at least 6 characters",
        ToastAndroid.SHORT
      );
      return;
    }

    if (formStep === 3) {
      handleSignUp({ fullName, email, password });
      return;
    }

    setFormStep(formStep + 1);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior={"position"} style={{ flex: 1 }}>
        {/* Step 1 */}
        {formStep === 1 && (
          <Fragment>
            <AuthFormHeader
              title="What's your name?"
              subTitle="Name should match as per your Govt ID"
              Icon="card-account-details-outline"
              key={"name"}
            />

            <View style={styles.fieldContainer}>
              <AppFormTextInput
                placeholder="Anmol Tanwar"
                value={fullName}
                onChangeText={(text) => setFullName(text)}
                onSubmitEditing={handleNextBtn}
              />
              <AppButton
                onPress={handleNextBtn}
                textVariant="button2"
                variant="primary"
              >
                Continue
              </AppButton>
            </View>
          </Fragment>
        )}

        {/* Step 2 */}
        {formStep === 2 && (
          <Fragment>
            <AuthFormHeader
              title="Please provide a valid email"
              subTitle="Email verification helps us keep your account secure."
              Icon="email-outline"
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
              <AppButton
                onPress={() => handleNextBtn()}
                textVariant="button2"
                variant="primary"
              >
                Continue
              </AppButton>
              <AppButton
                onPress={handleBackBtn}
                textVariant="button2"
                variant="text"
              >
                Back
              </AppButton>
            </View>
          </Fragment>
        )}

        {/* Step 3 */}
        {formStep === 3 && (
          <Fragment>
            <AuthFormHeader
              title="Please choose your password"
              subTitle="Password should be atleast 6 characters"
              Icon="form-textbox-password"
              key={"password"}
            />

            <View style={styles.fieldContainer}>
              <AppFormTextInput
                placeholder="123456"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                onSubmitEditing={handleNextBtn}
              />
              <AppButton
                onPress={() => handleNextBtn()}
                textVariant="button2"
                variant="primary"
              >
                Create Account
              </AppButton>
              <AppButton
                onPress={handleBackBtn}
                textVariant="button2"
                variant="text"
              >
                Back
              </AppButton>
            </View>
          </Fragment>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterUserScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  fieldContainer: {
    flexDirection: "column",
    width: "100%",
    gap: CONSTANTS.spacingLXX,
    paddingBottom: CONSTANTS.spacingS,
  },
  divider: { ...globalStyles.divider, backgroundColor: THEME.LIGHT_GRAY },
});
