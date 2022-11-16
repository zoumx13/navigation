import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AccountScreen from "./AccountScreen";
import SettingsScreen from "./SettingsScreen";
import ForumScreen from "./ForumScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function MyTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarStyle:{
        //   backgroundColor: '#fff',
        //   activeColor:"#1e90ff",
        // },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Forum") {
            iconName = focused ? "chatbubbles-outline" : "chatbubbles-outline";
          } else if (route.name === "Réglages") {
            iconName = focused ? "cog-outline" : "cog-outline";
          } else if (route.name === "Mon compte") {
            iconName = focused
              ? "key-outline"
              : "key-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "blue",

      })}
    >
      <Tab.Screen name="Forum" component={ForumScreen} />
      <Tab.Screen name="Mon compte" component={AccountScreen} />
      <Tab.Screen name="Réglages" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
