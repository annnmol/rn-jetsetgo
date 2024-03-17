import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  ToastAndroid,
  View
} from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import AppFormLabel from "@/components/forms/AppFormLabel";
import AppFormTextInput from "@/components/forms/AppFormTextField";
import AppIconButton from "@/components/shared/AppIconButton";
import AppText from "@/components/shared/AppText";
import { getRandomProfilePic } from "@/lib/utils";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";

const UserAccountScreen = () => {
  const setAuthSession = useAppStore(
    useShallow((state) => state.setAuthSession)
  );
  const authSession = useAppStore(useShallow((state) => state.authSession));
  const profilePic: string =
    getRandomProfilePic(authSession?.fullName ?? "Guest") ?? "";
  const handleLogout = () => {
    setAuthSession(null);
    ToastAndroid.show("User Logged out", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePic }} style={styles.image} />
      <AppText variant="h5">{authSession?.fullName ?? "Guest User"}</AppText>

      <View style={styles.infoBox}>
        <View style={styles.fieldContainer}>
          <AppFormLabel>Name</AppFormLabel>
          <AppFormTextInput
            placeholder={`${authSession?.fullName ?? "Guest User"} `}
            editable={false}
          />
        </View>
        <View style={styles.fieldContainer}>
          <AppFormLabel>Email</AppFormLabel>
          <AppFormTextInput
            placeholder={`${authSession?.email}`}
            editable={false}
            keyboardType="email-address"
          />
        </View>
      <AppIconButton
        style={{ marginTop: CONSTANTS.spacing }}
        onPress={() => handleLogout()}
        >
        <MaterialCommunityIcons
          name="logout"
          color={THEME.DARK_GRAY}
          size={36}
          />
      </AppIconButton>
          </View>
    </View>
  );
};

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    gap: CONSTANTS.spacingM,
  },

  image: {
    width: 52,
    height: 52,
    borderRadius: 30,
    objectFit: "cover",
  },

  infoBox: {
    flexDirection: "column",
    gap: CONSTANTS.spacingM,
    flex: 1,
  },
  fieldContainer: {
    flexDirection: "column",
    width: CONSTANTS.windowWidth / 1.3,
    gap: CONSTANTS.spacingSX,
    // flex: 1,
  },
});
