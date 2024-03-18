import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, GestureResponderEvent, Pressable, StyleSheet, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import FlightSearchCard from "@/components/home/flight-search-card";
import AppText from "@/components/shared/AppText";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";
import { Octicons } from "@expo/vector-icons";
import useGetFlights from "@/hooks/useGetFlights";

interface Props {
  navigation: NavigationProp<any>;
}

const SearchScreen = ({ navigation }: Props) => {
  const currentCity = useAppStore(useShallow((state) => state.currentCity));
  const destinationCity = useAppStore(
    useShallow((state) => state.destinationCity)
  );

  const appliedFilters = useAppStore(useShallow((state) => state.appliedFilters));
  const {filteredFlights, getFilteredFlights} = useGetFlights();

  useLayoutEffect(() => {
    if (!currentCity || !destinationCity) navigation?.goBack();

    navigation.setOptions({
      title: `${currentCity} to ${destinationCity}`,
    });
  }, []);


  useEffect(() => { 
    getFilteredFlights();
  }, [appliedFilters]);

  

  const header = () => {
    return (
      <AppText variant="body1" style={{ fontWeight: "600" }}>
        Available Flights:
      </AppText>
    );
  };

  const noData = () => {
    return (
      <AppText variant="body1" style={{ fontWeight: "600" }}>
        Couldn't find any flights for your search
      </AppText>
    );
  };

  const handleClick = (e: GestureResponderEvent) => {
    navigation.navigate("filters-screen");
  };

  return (
    <View style={styles.container}>
     <Pressable onPress={handleClick} style={styles.filterContainer}>
        <View  style={[styles.filterBtn]}>
          <Octicons name="arrow-switch" size={20} color={THEME.TEXT_LIGHT} />
          <AppText variant="body1" style={{ fontWeight: "600" }}>
            Sort by:
          </AppText>
        </View>
        <View style={styles.filterBtn}>
          <Octicons name="filter" size={20} color={THEME.TEXT_LIGHT} />
          <AppText variant="body1" style={{ fontWeight: "600" }}>
            Filter by:
          </AppText>
        </View>
      </Pressable>
      <FlatList
        data={filteredFlights}
        renderItem={({ item }) => {
          return <FlightSearchCard {...item} />;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={header}
        ListEmptyComponent={noData}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: CONSTANTS.spacing,
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacing,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: CONSTANTS.spacingS,
    backgroundColor: THEME.WHITE,
    gap: CONSTANTS.spacingS,
  },

  filterBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: CONSTANTS.spacingS,
    padding: CONSTANTS.spacingM,
    backgroundColor: THEME.LIGHT_GRAY,
    borderRadius: 4,
  },
});
