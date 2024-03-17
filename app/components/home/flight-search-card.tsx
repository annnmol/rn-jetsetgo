import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../shared/AppText";
import { CONSTANTS, THEME } from "@/theme/theme";
import AppButton from "../shared/AppButton";
import { formatDateTime } from "@/lib/utils";
import { MaterialIcons } from "@expo/vector-icons";

const PLANE_IMAGE = require("../../assets/images/welcome.png");

// {
//   id: 1,
//   gate: "A2",
//   seatsAvailable: 120,

//   origin: "Delhi",
// airline: "IndiGo",
//   aircraft: "Airbus A320",
//   flightNumber: "6E101",
//   destination: "Mumbai",

//   duration: "3 hours",
// arrivalTime: "2024-03-15T11:00:00",
//   departureTime: "2024-03-15T08:00:00",

//   price: 5000,
// },
interface Props {
  // id: number;
  // gate: string;
  price?: number;
  origin?: string;
  airline?: string;
  // aircraft: string;
  duration?: string;
  arrivalTime?: string;
  destination?: string;
  flightNumber?: string;
  departureTime?: string;
  // seatsAvailable: number;
}

const FlightSearchCard = ({
  // id,
  // gate,
  price = 4500,
  airline = "IndiGo",
  // aircraft,
  duration = "3 hours",
  destination = "Mumbai",
  flightNumber = "6E101",
  arrivalTime = "2024-03-15T11:00:00",
  departureTime = "2024-03-15T08:00:00",
  // seatsAvailable,
  origin = "Delhi",
}: Props) => {
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.topRow}>
        <View style={styles.bottomLeft}>
          <AppText variant="body2" style={styles.cardTitle}>
            {origin?.slice(0, 3)?.toUpperCase()}
          </AppText>

          <AppText variant="body2" style={styles.cardSubTitle}>
            {origin}
          </AppText>
        </View>
        <View style={[styles.topMiddle, { marginTop: -2 }]}>
          <AppText variant="body2" style={[styles.cardSubTitle,{fontWeight:"600"}]}>
            {airline}
          </AppText>
          <AppText variant="body2" style={{ color: THEME.GRAY, fontSize: 12 }}>
            {flightNumber}
          </AppText>
        </View>
        <View style={styles.bottomRight}>
          <AppText variant="body2" style={styles.cardTitle}>
            {destination?.slice(0, 3)?.toUpperCase()}
          </AppText>

          <AppText variant="body2" style={styles.cardSubTitle}>
            {destination}
          </AppText>
        </View>
      </View>
      <View style={styles.middleRow}>
        <View style={[styles.bottomLeft, { gap: 8 }]}>
          <AppText variant="body2" style={styles.cardSubTitle}>
            Depart
          </AppText>
          <AppText variant="body2" style={styles.cardTitle}>
            {formatDateTime(new Date(departureTime)).timeOnly}
          </AppText>
        </View>
        <View
          style={[
            styles.topMiddle,
            styles.middleMiddle,
          ]}
        >
          <MaterialIcons
            name="flight"
            size={24}
            color={THEME.GRAY}
            style={{ transform: [{ rotate: "45deg" }] }}
          />
          <AppText variant="body2" style={styles.cardSubTitle}>
            {duration}
          </AppText>
        </View>
        <View style={[styles.bottomRight, { gap: 8 }]}>
          <AppText variant="body2" style={styles.cardSubTitle}>
            Arrival
          </AppText>
          <AppText variant="body2" style={styles.cardTitle}>
            {formatDateTime(new Date(arrivalTime)).timeOnly}
          </AppText>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={[styles.bottomLeft,{gap:2}]}>
          <AppText variant="body2" style={[styles.cardSubTitle,{ color: THEME.WHITE }]}>
            Price
          </AppText>
          <View
            style={{
              flexDirection: "row",
              gap: 4,
            }}
          >
            <AppText
              variant="body2"
              style={{
                fontWeight: "500",
                color: THEME.WHITE,
                fontSize: 10,
                textDecorationLine: "line-through",
              }}
            >
              ₹ {price + 450}
            </AppText>
            <AppText
              variant="body2"
              style={[styles.cardTitle,{color: THEME.WHITE }]}
            >
              ₹ {price}
            </AppText>
          </View>
        </View>
        <View style={styles.bottomRight}>
          <AppButton
            variant="primary"
            onPress={() => undefined}
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

    height: 184,
    // width: CONSTANTS.windowWidth - 32,
    // marginHorizontal: CONSTANTS.spacing,
    backgroundColor: THEME.WHITE,
    borderRadius: CONSTANTS.spacingM,
    overflow: "hidden",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    color: "green",
    alignItems: "center",
  },
  boldBody: {
    fontWeight: "600",
    fontSize: 16,
  },

  topRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: CONSTANTS.spacing,
    paddingTop: CONSTANTS.spacingM,
  },
  middleRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 72,
    maxHeight: 72,
    paddingHorizontal: CONSTANTS.spacing,
    paddingTop: CONSTANTS.spacingM,
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "royalblue",
    height: 52,
    borderTopStartRadius: CONSTANTS.spacing,
    borderTopEndRadius: CONSTANTS.spacing,
    borderStyle: "dashed",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: THEME.PRIMARY,
    paddingHorizontal: CONSTANTS.spacing,
  },
  bottomLeft: {
    flex: 1,
    alignItems: "flex-start",
    gap: CONSTANTS.spacingSX,
  },
  bottomRight: {
    flex: 1,
    alignItems: "flex-end",
    gap: CONSTANTS.spacingSX,
  },

  topMiddle: {
    flex: 1,
    alignItems: "center",
  },
  middleMiddle: {
    marginTop: -14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  
  },
  cardSubTitle: {
    fontSize: 14,
    color: THEME.TEXT_MEDIUM,
  },
});
