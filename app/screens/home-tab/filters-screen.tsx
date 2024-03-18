import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import AppButton from "@/components/shared/AppButton";
import AppText from "@/components/shared/AppText";
import { DUMMY_FILTERS } from "@/lib/dummy-data";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";

interface Props {
  navigation: NavigationProp<any>;
}

const FiltersScreen = ({ navigation }: Props) => {
  const appliedFilters = useAppStore(
    useShallow((state) => state.appliedFilters)
  );
  const setAppliedFilters = useAppStore(
    useShallow((state) => state.setAppliedFilters)
  );
  const [activeFilterState, setActiveFilterState] = React.useState<IFilter>(
    DUMMY_FILTERS?.[0]
  );
  const [tempFilters, setTempFilters] = React.useState<any>(appliedFilters);

  const handleReset = (e: GestureResponderEvent) => {
    setTempFilters(undefined);
    setAppliedFilters(undefined);
    navigation?.navigate("search-screen");
  };
  const handleSubmit = (e: GestureResponderEvent) => {
    setAppliedFilters(tempFilters);
    navigation?.navigate("search-screen");
  };

  const handleTitleClick = (e: GestureResponderEvent, name: string) => {
    const state = DUMMY_FILTERS?.find((filter) => filter?.name === name); // Find the active filter
    if (state) setActiveFilterState(state);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <View style={styles.left}>
          <Pressable
            style={[
              styles.filterBtn,
              activeFilterState?.name === "sort" && styles.activeFilterBtn,
            ]}
            onPress={(e) => handleTitleClick(e, "sort")}
          >
            <AppText style={{ textAlign: "center" }}>Sort </AppText>
          </Pressable>
          <Pressable
            style={[
              styles.filterBtn,
              activeFilterState?.name === "airline" && styles.activeFilterBtn,
            ]}
            onPress={(e) => handleTitleClick(e, "airline")}
          >
            <AppText style={{ textAlign: "center" }}>Airline </AppText>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.right}>
          {activeFilterState?.options?.map((item, index) => {
            const activefilterName = activeFilterState?.name;
            const selectedFilter = tempFilters?.[activefilterName] ?? undefined;

            return (
              <Pressable
                onPress={() =>
                  setTempFilters({
                    ...tempFilters,
                    [activeFilterState?.name]: item,
                  })
                }
                style={styles.optionBtn}
                key={index}
              >
                {selectedFilter === item ? (
                  <Ionicons
                    name="radio-button-on-outline"
                    size={18}
                    color={THEME.GRAY}
                  />
                ) : (
                  <Ionicons
                    name="radio-button-off-outline"
                    size={18}
                    color={THEME.GRAY}
                  />
                )}
                <AppText style={{ fontWeight: "600" }}>{item}</AppText>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.actionBox}>
        <AppButton variant="text" textVariant="button3" onPress={handleReset}>
          Reset
        </AppButton>
        <AppButton textVariant="button3" onPress={handleSubmit}>
          Apply Filters
        </AppButton>
      </View>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  filterWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  filterBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: CONSTANTS.spacingM,
    backgroundColor: THEME.GRAY,
    height: 60,
  },

  activeFilterBtn: {
    backgroundColor: THEME.WHITE,
    borderColor: THEME.PRIMARY,
    borderRightWidth: 1,
    borderStyle: "dashed",
    borderRadius: 4,
  },
  right: {
    flex: 3,
    padding: CONSTANTS.spacingLX,
    gap: CONSTANTS.spacingLX,
  },
  left: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
  },
  optionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: CONSTANTS.spacing,
  },
  actionBox: {
    gap: CONSTANTS.spacingS,
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacing,
  },
});
