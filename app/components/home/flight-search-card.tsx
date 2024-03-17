import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

//user defined components
import { formatDateTime } from "@/lib/utils";
import { CONSTANTS, THEME } from "@/theme/theme";
import AppButton from "../shared/AppButton";
import AppText from "../shared/AppText";

const FlightSearchCard = ({
  id,
  origin,
  destination,
  airline,
  flightNumber,
  departureTime,
  arrivalTime,
  duration,
  price,
  gate,
}: IFlight) => {
  const navigation = useNavigation<any>();

  const handleClick = (e: GestureResponderEvent, id: number | string) => {
    navigation.navigate("view-order-screen", { id });
  };
  return (
    <Pressable style={styles.cardContainer} onPress={(e) => handleClick(e, id)}>
      <View style={styles.bottomRow}>
        <View style={styles.column}>
          <AppText style={[styles.labelText]}>{origin}</AppText>
          <AppText style={[styles.titleText]}>
            {origin?.slice(0, 3)?.toUpperCase()}
          </AppText>
        </View>
        <View style={[styles.column, { alignItems: "center" }]}>
          <AppText style={[styles.labelText]}>{flightNumber}</AppText>
          <AppText style={[styles.titleText]}>{airline}</AppText>
        </View>
        <View style={[styles.column, { alignItems: "flex-end" }]}>
          <AppText style={[styles.labelText]}>{destination}</AppText>
          <AppText style={[styles.titleText]}>
            {destination?.slice(0, 3)?.toUpperCase()}
          </AppText>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.column}>
          <AppText style={[styles.labelText]}>Departure</AppText>
          <AppText style={[styles.titleText]}>
            {formatDateTime(new Date(departureTime as string)).timeOnly}
          </AppText>
        </View>
        <View style={[styles.column, { alignItems: "center" }]}>
          <MaterialIcons
            name="flight"
            size={16}
            color={THEME.GRAY}
            style={{ transform: [{ rotate: "45deg" }] }}
          />
          <AppText style={[styles.labelText]} numberOfLines={1}>
            {duration}
          </AppText>
        </View>
        <View style={[styles.column, { alignItems: "flex-end" }]}>
          <AppText style={[styles.labelText]}>Arrival</AppText>
          <AppText style={[styles.titleText]}>
            {formatDateTime(new Date(arrivalTime as string)).timeOnly}
          </AppText>
        </View>
      </View>

      <View
        style={[
          styles.bottomRow,
          styles.border,
          { backgroundColor: "royalblue" },
        ]}
      >
        <View style={styles.column}>
          <AppText style={[styles.labelText, { color: THEME.WHITE }]}>
            Price
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <AppText
              variant="body2"
              style={[
                styles.titleText,
                {
                  color: THEME.WHITE,
                  fontSize: 10,
                  textDecorationLine: "line-through",
                },
              ]}
            >
              ₹ {price + 450}
            </AppText>
            <AppText
              variant="body2"
              style={[styles.titleText, { color: THEME.WHITE }]}
            >
              ₹ {price}
            </AppText>
          </View>
        </View>
        <View style={[styles.column, { alignItems: "flex-end" }]}>
          <AppButton
            variant="primary"
            onPress={(e) => handleClick(e, id)}
            textVariant="button3"
            style={{ height: 28, width: 110 }}
          >
            Book Now
          </AppButton>
        </View>
      </View>
    </Pressable>
  );
};

export default FlightSearchCard;

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: THEME.TEXT_LIGHT,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,

    backgroundColor: THEME.WHITE,
    borderRadius: CONSTANTS.spacingM,
    overflow: "hidden",
  },

  labelText: {
    fontWeight: "600",
    fontSize: 13,
    color: THEME.GRAY,
  },
  titleText: {
    fontWeight: "600",
    fontSize: 15,
    color: THEME.TEXT,
  },

  bottomRow: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacingSX,
    height: 52,
  },

  column: {
    alignItems: "flex-start",
    justifyContent: "center",
    gap: CONSTANTS.spacingSX,
    flex: 1,
  },

  border: {
    borderTopColor: THEME.TEXT_LIGHT,
    borderTopWidth: 1,
    borderStyle: "dashed",
  },
});
