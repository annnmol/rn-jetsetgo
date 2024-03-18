import React, { Fragment } from "react";
import {
  FlatList,
  GestureResponderEvent,
  Pressable,
  StyleSheet
} from "react-native";

//user defined components
import { CONSTANTS, THEME } from "@/theme/theme";
import AppText from "../shared/AppText";

interface Props {
  filteredData: any;
  onPress:
    | ((event: GestureResponderEvent, item: any) => void)
    | null
    | undefined;
}

const CitySearchResults = ({ filteredData, onPress }: Props) => {
  const renderItem = ({ item }: any) => {
    return (
      <Pressable
        onPress={(e) => onPress && onPress(e, item)}
        style={styles.card}
      >
        <AppText style={{ fontWeight: "600", fontSize: 16 }}>
          {item?.city}
        </AppText>
        <AppText style={{ fontSize: 16 }}> {item?.airportCode}</AppText>
      </Pressable>
    );
  };

  const header = () => {
    return (
      <AppText variant="body1" style={{ fontWeight: "600" }}>
        Available cities:
      </AppText>
    );
  };

  const noData = () => {
    return (
      <AppText variant="body1" style={{ fontWeight: "600" }}>
        Couldn't find any Indian airport cities for your search
      </AppText>
    );
  };

  return (
    <Fragment >
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={header}
        ListEmptyComponent={noData}
        testID="city-search-results"
      />
    </Fragment>
  );
};

export default CitySearchResults;

const styles = StyleSheet.create({
  content: {
    gap: CONSTANTS.spacingS,
    // backgroundColor: THEME.SECONDARY,
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacing,
  },

  card: {
    flex: 1,
    flexDirection: "row",
    gap: CONSTANTS.spacingSX,
    alignItems: "center",
    borderRadius: CONSTANTS.spacingSX,
    backgroundColor: THEME.WHITE,
    paddingVertical: CONSTANTS.spacingM,
    paddingHorizontal: CONSTANTS.spacingM,
  },
});
