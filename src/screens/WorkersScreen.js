import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function WorkersScreen(props, { navigation }) {
  return (
    <View style={styles.items}>
      <Text style={{ fontSize: 18 }}>Workers Screen</Text>
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
