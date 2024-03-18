import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

//user defined components
import HomeFooter from "@/components/home/home-footer";
import HomeHeader from "@/components/home/home-header";
import HomeOffers from "@/components/home/home-offers";
import HomeSearchBox from "@/components/home/home-search-box";
import AppText from "@/components/shared/AppText";
import { CONSTANTS } from "@/theme/theme";

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <HomeHeader />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <AppText style={styles.sectionTitle} variant="h4">
          Book your flight now
        </AppText>
        <HomeSearchBox />

        <HomeOffers />
        <HomeFooter />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    gap: CONSTANTS.spacing,
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacingM,
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    marginTop: CONSTANTS.spacingM,
  },
});
