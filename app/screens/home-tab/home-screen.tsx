import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "@/theme/globalStyles";
import { NavigationProp } from "@react-navigation/native";
import AppButton from "@/components/shared/AppButton";

//user defined components
// import useAppStore from "@/store/app-store";
// import useGetFlights from "@/hooks/useGetFlightsData";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const HomeScreen:React.FC<Props> = ({navigation}) => {
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
      <MaterialIcons name="flight" size={24} color="black" />
      <Text>HomeScreen</Text>
      <AppButton
        onPress={() => handleSearchFlights()}
        textVariant="button2"
        variant="primary"
      >
        Search
      </AppButton>
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
