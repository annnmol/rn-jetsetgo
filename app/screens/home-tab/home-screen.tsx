import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "@/theme/globalStyles";

//user defined components
// import useAppStore from "@/store/app-store";
// import useGetFlights from "@/hooks/useGetFlightsData";

const HomeScreen = () => {
  // const authSession = useAppStore(useShallow((state) => state.authSession));
  // console.log(
  //   `🚀 ~ file: home-screen.tsx:11 ~ HomeScreen ~ authSession:`,
  //   authSession
  // );
  // const { getAllFlights } = useGetFlights();
  
  // useEffect(() => {
  //   getAllFlights("378e02e8e732bb1ac55b");

  //  }, []);

  return (
    <View style={styles.container}>
      <MaterialIcons name="flight" size={24} color="black" />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyles.appScreen.backgroundColor,
  },
});
