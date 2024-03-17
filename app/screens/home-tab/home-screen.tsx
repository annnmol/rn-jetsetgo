import React, { useEffect, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "@/theme/globalStyles";
import { NavigationProp } from "@react-navigation/native";
import AppButton from "@/components/shared/AppButton";
import TvScreen from "@/components/cards/blob-card";
import HomeHeader from "@/components/home/home-header";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "@/components/shared/AppText";
import { StatusBar } from "expo-status-bar";
import FlightSearchCard from "@/components/home/flight-search-card";
import HomeFooter from "@/components/home/home-footer";
import HomeOffers from "@/components/home/home-offers";

//user defined components
// import useAppStore from "@/store/app-store";
// import useGetFlights from "@/hooks/useGetFlightsData";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const HomeScreen = ({ navigation }: Props) => {
  // const authSession = useAppStore(useShallow((state) => state.authSession));
  // console.log(
  //   `🚀 ~ file: home-screen.tsx:11 ~ HomeScreen ~ authSession:`,
  //   authSession
  // );
  // const { getAllFlights } = useGetFlights();

  // useEffect(() => {
  //   getAllFlights("378e02e8e732bb1ac55b");

  //  }, []);

  const handleSearchFlights = () => {
    navigation.navigate("search-screen");
  };

  return (
    <View style={styles.container}>
      <HomeHeader />
      {/* <MaterialIcons name="flight" size={24} color="black" /> */}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* <Text>HomeScreen</Text> */}
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <FlightSearchCard />
        <HomeOffers />
        <HomeFooter />
      </ScrollView>
      {/* <TvScreen />
      <AppButton
        onPress={() => handleSearchFlights()}
        textVariant="button2"
        variant="primary"
      >
        Search
      </AppButton>
      <AppButton
        onPress={() => handleSearchFlights()}
        textVariant="button2"
        variant="outline"
      >
        Search
      </AppButton>
      <AppButton
        onPress={() => handleSearchFlights()}
        textVariant="button2"
        variant="text"
      >
        Search
      </AppButton> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: CONSTANTS.spacingM,
    // paddingHorizontal: CONSTANTS.spacing,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: THEME.PRIMARY,
  },

  contentContainer: {
    // flex: 1,
    gap: CONSTANTS.spacing,
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacingM,
    // backgroundColor: "#F5F5FC",
  },
});
