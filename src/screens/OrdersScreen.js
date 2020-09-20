import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { firebase } from "../config/firebaseConfig";
import Colors from "../constants/Colors";

export default function OrdersScreen(props, { navigation }) {
  const onUserPress = () => {};

  function signout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("Signed out");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.items}>
        <Text style={{ fontSize: 24 }}>Current Orders</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Order# 1005</Text>
        <Text style={{ fontSize: 16 }}>Equipment: vehicle</Text>
        <Text style={{ fontSize: 16 }}>EquipmentID: Veh123</Text>
        <Text style={{ fontSize: 16 }}>Facility: Fac5</Text>
        <Text style={{ fontSize: 16 }}>Priority: 1</Text>
        <Text style={{ fontSize: 16 }}>Time: 6</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Order# 1002</Text>
        <Text style={{ fontSize: 16 }}>Equipment: conveyor</Text>
        <Text style={{ fontSize: 16 }}>EquipmentID: Con391</Text>
        <Text style={{ fontSize: 16 }}>Facility: Fac3</Text>
        <Text style={{ fontSize: 16 }}>Priority: 1</Text>
        <Text style={{ fontSize: 16 }}>Time: 4</Text>
      </View>
      <View style={styles.items}>
        <View style={styles.items}>
          <Text style={{ fontSize: 18 }}>Order# 1001</Text>
          <Text style={{ fontSize: 16 }}>Equipment: separator</Text>
          <Text style={{ fontSize: 16 }}>EquipmentID: cbkd</Text>
          <Text style={{ fontSize: 16 }}>Facility: Fac2</Text>
          <Text style={{ fontSize: 16 }}>Priority: 4</Text>
          <Text style={{ fontSize: 16 }}>Time: 2</Text>
          <Text style={{ fontSize: 16 }}>Worker: Jackie</Text>
        </View>
      </View>

      <TouchableOpacity onPress={signout}>
        <View style={styles.logout}>
          <Text style={{ fontSize: 24 }}>Logout</Text>
        </View>
      </TouchableOpacity>
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
