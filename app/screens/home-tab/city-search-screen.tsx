import { MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import AppFormTextInput from "@/components/forms/AppFormTextField";
import CitySearchResults from "@/components/home/city-search-results";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";
import useGetCities from "@/hooks/useGetCities";

interface Props {
  navigation: NavigationProp<any>;
}

const CitySearchScreen = ({ navigation }: Props) => {
  const route = useRoute<any>();
  const fieldName = route?.params?.field ?? "city";

  const setCurrentCity = useAppStore(useShallow((state) => state.setCurrentCity));
  const setDestinationCity = useAppStore(useShallow((state) => state.setDestinationCity));

  const [input, setInput] = useState<string>("");
  const {filtredCities,getFiltredCities} = useGetCities();

  const handleInputChange = (text: string) => {
    setInput(text);

    getFiltredCities(text);
  };

  const handleClick = (e: any, item: IAirportCity) => { 
    if (fieldName === "current_city") setCurrentCity(item.city);

    if (fieldName === "destination_city") setDestinationCity(item.city);
    
    navigation.navigate("home-screen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <AppFormTextInput
          placeholder="Jaipur"
          value={input}
          onChangeText={handleInputChange}
          keyboardType="web-search"
          returnKeyLabel="Search"
          style={{ flex: 1, backgroundColor: "#f5f5f5" }}
          autoCorrect
        />
        <View style={styles.iconBox}>
          <MaterialIcons name="search" size={24} color={THEME.GRAY} />
        </View>
      </View>
      <CitySearchResults filteredData={filtredCities} onPress={handleClick}/>
    </View>
  );
};

export default CitySearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: CONSTANTS.spacing,
    alignItems: "center",
    paddingVertical: CONSTANTS.spacingS,
    backgroundColor: THEME.WHITE,
  },

  iconBox: {
    backgroundColor: "##f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 44,
    height: 44,
  },
});
