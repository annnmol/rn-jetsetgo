import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

//user defined components
import AppButton from "@/components/shared/AppButton";
import AppText from "@/components/shared/AppText";
import globalStyles from "@/theme/globalStyles";
import { CONSTANTS, THEME } from "@/theme/theme";
import useAppStore from "@/store/app-store";
import { useShallow } from "zustand/react/shallow";

const WELCOME_IMAGE = require("../../assets/images/welcome.png");

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const WelcomeScreen = ({ navigation }: Props) => {
  const authSession = useAppStore(useShallow((state) => state.authSession));

  console.log(`🚀 ~ file: welcome-screen.tsx:22 ~ WelcomeScreen ~ authSession:`, authSession);


  const handleLoginBtnClick = () => {
    navigation.navigate("login-user-screen");
  };
  const handleSignUpBtnClick = () => {
    navigation.navigate("register-user-screen");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={WELCOME_IMAGE} />
      <View style={styles.infoBox}>
        <AppText
          variant="h1"
          style={[
            styles.text,
            {
              marginBottom: "auto",
            },
          ]}
        >
          Welcome to JetSetGo
        </AppText>
        <AppText
          variant="h4"
          style={[
            styles.text,
            {
              fontWeight: "bold",
            },
          ]}
        >
          Easy To Use. Easy Flight Search.
        </AppText>

        <AppText
          variant="body3"
          style={[
            styles.text,
            {
              marginBottom: "auto",
            },
          ]}
        >
          “User-friendly interface. Efficient flight search. Enjoy a hassle-free
          booking”
        </AppText>

        <View style={styles.divider} />

        <AppButton
          onPress={() => handleSignUpBtnClick()}
          textVariant="button2"
          variant="outline"
        >
          Join Us Now
        </AppButton>

        <AppButton
          onPress={() => handleLoginBtnClick()}
          textVariant="button2"
          variant="text"
          textStyle={styles.text}
        >
          Already a member? Login
        </AppButton>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    alignItems: "center",
  },
  text: {
    color: THEME.WHITE,
    textAlign: "center",
  },
  image: {
    resizeMode: "contain",
    width: CONSTANTS.windowWidth / 1.2,
    height: CONSTANTS.windowHeight / 2,
    backgroundColor: THEME.WHITE,
    paddingHorizontal: CONSTANTS.spacingL,
    marginTop: CONSTANTS.spacingLXX,
  },
  infoBox: {
    borderTopEndRadius:CONSTANTS.spacingLX,
    borderTopStartRadius:CONSTANTS.spacingLX,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: CONSTANTS.spacingM,
    width: CONSTANTS.windowWidth,
    paddingHorizontal: CONSTANTS.spacingL,
    paddingVertical: CONSTANTS.spacingL,
    marginBottom: CONSTANTS.spacingM,
    backgroundColor: THEME.PRIMARY,
  },

  divider: globalStyles.divider,
});
