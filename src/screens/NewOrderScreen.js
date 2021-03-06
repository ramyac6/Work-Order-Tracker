import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dropdown } from "react-native-material-dropdown-v2";

import { firebase } from "../config/firebaseConfig";
import Colors from "../constants/Colors";

export default function NewOrderScreen({ navigation }) {
  let orderNum = 1004;
  const [facility, setFacility] = useState("");
  const [equipment, setEquipment] = useState("");
  const [equipmentID, setEquipmentID] = useState("");
  const [priority, setPriority] = useState("");
  const [time, setTime] = useState("");
  const assignedWorker = "";
  const inProgress = false;

  const onRegisterPress = () => {
    if (
      facility == "" ||
      equipment == "" ||
      equipmentID == "" ||
      priority == "" ||
      time == ""
    ) {
      alert("A field was left empty");
      return;
    }

    const data = {
      facility,
      equipment,
      equipmentID,
      priority,
      time,
      assignedWorker,
      inProgress,
    };

    orderNum = orderNum + 1;
    const orderRef = firebase.firestore().collection("orders");
    orderRef
      .doc(orderNum.toString())
      .set(data)
      .then(() => {
        navigation.navigate("Orders");
      })
      .catch((error) => {
        alert(error);
      });
  };

  let facilities = [
    {
      value: "Fac1",
    },
    {
      value: "Fac2",
    },
    {
      value: "Fac3",
    },
    {
      value: "Fac4",
    },
    {
      value: "Fac5",
    },
  ];

  let equipments = [
    {
      value: "Pump",
    },
    {
      value: "Compressor",
    },
    {
      value: "Separator",
    },
    {
      value: "Sensor",
    },
    {
      value: "Security",
    },
    {
      value: "Electricity",
    },
    {
      value: "Networking",
    },
    {
      value: "Vehicle",
    },
    {
      value: "HVAC",
    },
    {
      value: "Conveyer",
    },
  ];

  let priorities = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.title}>New Work Order</Text>
        <View style={styles.dropdown}>
          <Dropdown
            label="Facility"
            data={facilities}
            onChangeText={(text) => setFacility(text)}
          />
        </View>
        <View style={styles.dropdown}>
          <Dropdown
            label="Equipment Type"
            data={equipments}
            onChangeText={(text) => setEquipment(text)}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Equipment ID"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEquipmentID(text)}
          value={equipmentID}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <View style={styles.dropdown}>
          <Dropdown
            label="Priority"
            data={priorities}
            onChangeText={(text) => setPriority(text)}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Time to Complete (in hours)"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setTime(text)}
          value={time}
          underlineColorAndroid="transparent"
          keyboardType={"numeric"}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Submit Work Order</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  title: {
    backgroundColor: "white",
    fontSize: 24,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 16,
  },
  input: {
    height: 48,
    fontSize: 16,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  dropdown: {
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: Colors.lightBlue,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
  },
  footerLink: {
    color: Colors.lightBlue,
    fontWeight: "bold",
    fontSize: 16,
  },
});
