import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

//user defined components
import AppButton from "@/components/shared/AppButton";
import AppText from "@/components/shared/AppText";
import useAppStore from "@/store/app-store";
import { CONSTANTS, THEME } from "@/theme/theme";
import { formatDateTime } from "@/lib/utils";

interface Props {
  navigation: NavigationProp<any>;
}

const ViewOrderScreen = ({ navigation }: Props) => {
  const allFlights = useAppStore(useShallow((state) => state.allFlights));
  const authSession = useAppStore(useShallow((state) => state.authSession));
  const { params } = useRoute<any>();
  const [order] = allFlights.filter((flight: any) => flight?.id === params?.id);

  useEffect(() => {
    if (!order) {
      navigation?.goBack();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.statusBox}>
        <Ionicons name="checkmark-circle" size={48} color={THEME.SUCCESS} />
        <AppText variant="h5" style={{ color: THEME.WHITE }}>
          Ticket confirmed
        </AppText>
        <AppText variant="body3" style={{ color: THEME.WHITE }}>
          Booking done successfully!
        </AppText>
      </View>
      <View style={styles.cardContainer}>
        {/* 1ST ROW */}
        <View style={styles.bottomRow}>
          <View style={styles.column}>
            <AppText style={styles.labelText}>Passenger</AppText>
            <AppText style={styles.titleText}>
              {authSession?.fullName ?? authSession?.email}
            </AppText>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <AppText style={styles.labelText}>Airlines</AppText>
            <AppText style={styles.titleText}>
              {order?.airline ?? "Indigo"}
            </AppText>
          </View>
        </View>

        {/* 2ND ROW */}
        <View style={[styles.bottomRow, styles.border]}>
          <View style={styles.column}>
            <AppText style={styles.labelText}>{order?.origin}</AppText>
            <AppText style={[styles.titleText, { fontSize: 18 }]}>
              {order?.origin?.slice(0, 3)?.toUpperCase()}
            </AppText>
          </View>
          <View style={[styles.column, { alignItems: "center" }]}>
            <AppText style={styles.labelText}>Duration</AppText>
            <AppText style={styles.titleText}>{order?.duration}</AppText>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <AppText style={styles.labelText}>{order?.destination}</AppText>

            <AppText style={[styles.titleText]}>
              {order?.destination?.slice(0, 3)?.toUpperCase()}
            </AppText>
          </View>
        </View>

        {/* 3ND ROW */}
        <View style={styles.bottomRow}>
          <View style={styles.column}>
            <AppText style={styles.labelText}>Flight Code</AppText>
            <AppText style={styles.titleText}>{order?.flightNumber}</AppText>
          </View>
          <View style={[styles.column, { alignItems: "center" }]}>
            <AppText style={styles.labelText}>Class</AppText>
            <AppText style={styles.titleText}>Economy</AppText>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <AppText style={styles.labelText}>Seat</AppText>

            <AppText style={styles.titleText}>F14</AppText>
          </View>
        </View>

        {/* 4th ROW */}
        <View style={styles.bottomRow}>
          <View style={styles.column}>
            <AppText style={styles.labelText}>Date</AppText>
            <AppText style={styles.titleText}>
              {
                formatDateTime(new Date(order?.departureTime as string))
                  .dateOnly
              }
            </AppText>
          </View>
          <View style={[styles.column, { alignItems: "center" }]}>
            <AppText style={styles.labelText}>Departure</AppText>
            <AppText style={styles.titleText}>
              {
                formatDateTime(new Date(order?.departureTime as string))
                  .timeOnly
              }
            </AppText>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <AppText style={styles.labelText}>Arrival</AppText>

            <AppText style={styles.titleText}>
              {formatDateTime(new Date(order?.arrivalTime as string)).timeOnly}
            </AppText>
          </View>
        </View>

        {/* 5th ROW */}
        <View style={[styles.bottomRow, styles.border]}>
          <View style={styles.column}>
            <AppText style={styles.labelText}>Gate</AppText>
            <AppText style={styles.titleText}>{order?.gate}</AppText>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <AppText style={styles.labelText}>Terminal</AppText>
            <AppText style={styles.titleText}>T2</AppText>
          </View>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <AppButton
          variant="primary"
          textVariant="button2"
          onPress={() => navigation.navigate("home-screen")}
        >
          Go to Home
        </AppButton>
      </View>
    </View>
  );
};

export default ViewOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBox: {
    backgroundColor: THEME.PRIMARY,
    alignItems: "center",
    gap: CONSTANTS.spacingM,
    padding: CONSTANTS.spacing,
    elevation: 5,
  },

  cardContainer: {
    shadowColor: THEME.TEXT_LIGHT,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,

    backgroundColor: THEME.WHITE,
    borderRadius: CONSTANTS.spacingM,
    overflow: "hidden",
    margin: CONSTANTS.spacing,
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

  topRow: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacingSX,
    gap: CONSTANTS.spacingSX,
    height: 60,
  },

  // bottomRow: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   paddingHorizontal: CONSTANTS.spacing,
  //   paddingVertical: CONSTANTS.spacingSX,
  // },

  bottomRow: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: CONSTANTS.spacing,
    paddingVertical: CONSTANTS.spacingSX,
    height: 64,
  },

  column: {
    alignItems: "flex-start",
    justifyContent: "center",
    gap: CONSTANTS.spacingSX,
    flex: 1,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },

  border: {
    borderTopColor: THEME.TEXT_LIGHT,
    borderTopWidth: 1,
    borderStyle: "dashed",
  },
});
