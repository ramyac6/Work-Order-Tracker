import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OrdersScreen from "./OrdersScreen";
import NewOrderScreen from "./NewOrderScreen";
import Colors from "../constants/Colors";
import WorkersScreen from "./WorkersScreen";

const Tabs = createBottomTabNavigator();

export default function HomeScreen(props, { navigation }) {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.darkGray,
        inactiveTintColor: Colors.gray,
      }}
    >
      <Tabs.Screen name="New Order" component={NewOrderScreen} />
      <Tabs.Screen name="Orders" component={OrdersScreen} />
      {/*
      <Tabs.Screen name="Workers" component={WorkersScreen} />

      
      <Tabs.Screen name="Settings">
        {(props) => <SettingsScreen {...props} extraData={userID} />}
      </Tabs.Screen>
      */}
    </Tabs.Navigator>
  );
}
