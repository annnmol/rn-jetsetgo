import { Ionicons } from "@expo/vector-icons";
import React, { Fragment } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  ToastAndroid
} from "react-native";

//user defined components
import { DUMMY_TRAVEL_CATEGORIES } from "@/lib/dummy-data";
import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "../shared/AppText";

const HomeHeader = () => {
  const [activeChip, setActiveChip] = React.useState<string>("Flights");
  const renderItem = ({ item }: any) => {
    const isActive = item.name === activeChip ?? false;
    const onPress = () => {
      if (item.name !== "Flights") {
        ToastAndroid.show("Features coming soon!", ToastAndroid.SHORT);
        return;
      }
      setActiveChip(item.name);
    };
    return (
      <Pressable
        style={[styles.chip, isActive && styles.activeChipStyle]}
        onPress={onPress}
      >
        <Ionicons name={item.icon} size={20} color="white" />
        <AppText style={styles.chipText}>{item.name}</AppText>
      </Pressable>
    );
  };

  return (
      <FlatList
        data={DUMMY_TRAVEL_CATEGORIES}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.id.toString()}
      />
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CONSTANTS.spacing,
    // paddingVertical: CONSTANTS.spacingS,
    height: 52,
    gap: CONSTANTS.spacingS,
    backgroundColor: THEME.PRIMARY,
    flexDirection: "row",
    alignItems: "center",

  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "transparent",
    paddingHorizontal: CONSTANTS.spacingS,
    height: 28,
    gap: CONSTANTS.spacingS,
  },
  chipText: {
    fontWeight: "bold",
    color: THEME.WHITE,
    fontSize: 14,
  },
  activeChipStyle: {
    borderColor: "white",
  },
});
