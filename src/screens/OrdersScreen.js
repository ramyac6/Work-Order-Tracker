import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OrdersScreen(props, { navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Orders</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Order 1</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Order 2</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Order 3</Text>
      </View>
      <View style={styles.logout}>
        <Text style={{ fontSize: 24 }}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: Colors.lightGray,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    borderColor: Colors.darkGray,
    borderRadius: 2,
  },
  logout: {
    backgroundColor: Colors.lightBlue,
    marginBottom: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
});
