import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FlightSearchCard from "@/components/home/flight-search-card";
import HomeFooter from "@/components/home/home-footer";
import HomeHeader from "@/components/home/home-header";
import HomeOffers from "@/components/home/home-offers";
import { CONSTANTS } from "@/theme/theme";

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
