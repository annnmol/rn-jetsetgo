import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import useGetFlights from "@/hooks/useGetFlights";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";
import AppButton from "../shared/AppButton";
import AppText from "../shared/AppText";

interface Props {
  // id: number;
}

const HomeSearchBox = ({}: Props) => {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const currentCity = useAppStore(useShallow((state) => state.currentCity));
  const destinationCity = useAppStore(
    useShallow((state) => state.destinationCity)
  );
  const setAppliedFilters = useAppStore(
    useShallow((state) => state.setAppliedFilters)
  );

  const { getAllFlights } = useGetFlights();

  //clear applied filters on component mount
  useEffect(() => {
    setAppliedFilters(undefined);
  }, [isFocused]);

  const handleInputPress = (e: GestureResponderEvent, field: string) => {
    navigation?.navigate("city-search-screen", { field });
  };

  const handleSearchFlights = () => {
    if (!currentCity || !destinationCity) {
      ToastAndroid.show(
        "Please select origin and destination cities to proceed.",
        ToastAndroid.SHORT
      );
      return;
    }

    if (currentCity === destinationCity) {
      ToastAndroid.show(
        "Origin and destination cities cannot be the same.",
        ToastAndroid.SHORT
      );
      return;
    }

    getAllFlights("378e02e8e732bb1ac55b").then((res) => {
      navigation.navigate("search-screen");
    });
  };
  return (
    <View style={styles.cardContainer}>
      <Pressable
        style={styles.topRow}
        onPress={(e) => handleInputPress(e, "current_city")}
      >
        <View style={styles.fieldLabel}>
          <MaterialIcons name="flight-takeoff" size={20} color={THEME.GRAY} />
          <AppText variant="body2" style={styles.labelText}>
            From
          </AppText>
        </View>
        <Text style={[styles.inputField]} disabled={true}>
          {currentCity?.length > 0 ? currentCity : "Enter Origin"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.topRow}
        onPress={(e) => handleInputPress(e, "destination_city")}
      >
        <View style={styles.fieldLabel}>
          <MaterialIcons name="flight-land" size={20} color={THEME.GRAY} />
          <AppText variant="body2" style={styles.labelText}>
            To
          </AppText>
        </View>
        <Text style={[styles.inputField]} disabled={true}>
          {destinationCity?.length > 0 ? destinationCity : "Enter Destination"}
        </Text>
      </Pressable>

      <View style={styles.bottomRow}>
        <AppButton
          variant="primary"
          onPress={() => handleSearchFlights()}
          textVariant="button2"
        >
          Search Flights
        </AppButton>
      </View>
    </View>
  );
};

export default HomeSearchBox;

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: THEME.TEXT_LIGHT,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,

    backgroundColor: THEME.WHITE,
    borderRadius: CONSTANTS.spacingM,
    overflow: "hidden",
    padding: CONSTANTS.spacingL,
    gap: CONSTANTS.spacing,
  },

  labelText: {
    fontWeight: "600",
    fontSize: 14,
    color: THEME.GRAY,
  },

  topRow: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: CONSTANTS.spacingS,
    paddingVertical: CONSTANTS.spacingSX,
    backgroundColor: "#f9f9f9",
    borderRadius: CONSTANTS.spacingSX,

    shadowColor: THEME.TEXT_LIGHT,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },

  bottomRow: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: CONSTANTS.spacingS,
    paddingVertical: CONSTANTS.spacingSX,
    marginTop: CONSTANTS.spacingM,
  },

  fieldLabel: {
    height: 32,
    flexDirection: "row",
    gap: CONSTANTS.spacingSX,
    alignItems: "center",
  },

  inputField: {
    width: "100%",
    height: 44,
    borderRadius: 4,
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    color: THEME.TEXT_LIGHT,
    fontWeight: "600",
  },
});
