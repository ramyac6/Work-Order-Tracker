import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OrdersScreen from "./OrdersScreen";

import Colors from "../constants/Colors";

const Tabs = createBottomTabNavigator();

export default function HomeScreen(props, { navigation }) {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.darkGray,
        inactiveTintColor: Colors.gray,
      }}
    >
      <Tabs.Screen name="Orders" component={OrdersScreen} />

      {/*
      <Tabs.Screen name="Settings">
        {(props) => <SettingsScreen {...props} extraData={userID} />}
      </Tabs.Screen>
      */}
    </Tabs.Navigator>
  );
}