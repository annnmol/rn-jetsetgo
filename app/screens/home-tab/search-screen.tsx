import { NavigationProp } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import FlightSearchCard from "@/components/home/flight-search-card";
import AppText from "@/components/shared/AppText";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";
import { FlatList } from "react-native-gesture-handler";
interface Props {
  navigation: NavigationProp<any>;
}

const SearchScreen = ({ navigation }: Props) => {
  const currentCity = useAppStore(useShallow((state) => state.currentCity));
  const destinationCity = useAppStore(
    useShallow((state) => state.destinationCity)
  );
  const allFlights = useAppStore(useShallow((state) => state.allFlights));

  useLayoutEffect(() => {
    if (!currentCity || !destinationCity) navigation?.goBack();

    navigation.setOptions({
      title: `${currentCity} to ${destinationCity}`,
    });
  }, []);

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

  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <FlatList
        data={allFlights}
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
});
