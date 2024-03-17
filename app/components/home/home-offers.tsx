import React, { Fragment } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";

//user defined components
import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "../shared/AppText";
import { DUMMY_TRAVEL_OFFERS } from "@/lib/dummy-data";

const HomeOffers = () => {
  const renderItem = ({ item }: any) => {
    return (
      <Pressable style={styles.card}>
        <Image source={{ uri: item?.image }} style={styles.cardImage} />
        <View style={styles.cardRight}>
          <AppText style={styles.cardTitle}>{item?.title}</AppText>
          <AppText style={styles.cardSubTitle}>{item?.subTitle}</AppText>
        </View>
      </Pressable>
    );
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <AppText style={styles.sectionTitle}>Current offers</AppText>
        <FlatList
          data={DUMMY_TRAVEL_OFFERS}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Fragment>
  );
};

export default HomeOffers;

const styles = StyleSheet.create({
  container: {
    paddingVertical: CONSTANTS.spacing,
    marginHorizontal: -CONSTANTS.spacingM, // to remove the horizontal padding from the parent
    gap: CONSTANTS.spacingS,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: THEME.TEXT_MEDIUM,
    paddingHorizontal: CONSTANTS.spacing 
  },

  content: {
    gap: CONSTANTS.spacing,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: CONSTANTS.spacing // to add the horizontal padding to the children now negative scroll will not be cut off
  },

  card: {
    width: 250,
    height: 100,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: THEME.WHITE,
    borderRadius: CONSTANTS.spacingM,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: THEME.TEXT_MEDIUM,
  },
  cardSubTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: THEME.TEXT_LIGHT,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: CONSTANTS.spacingS,
    objectFit: "cover",
  },

  cardRight: {
    flex: 1,
    gap: CONSTANTS.spacingSX,
    padding: CONSTANTS.spacingS,
  },
});
