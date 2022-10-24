import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AccountScreen from "./AccountScreen";
import SettingsScreen from "./SettingsScreen";
import HomeScreen from "./HomeScreen";

export default function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Accueil") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Réglages") {
            iconName = focused ? "cog-outline" : "cog-outline";
          } else if (route.name === "Mon compte") {
            iconName = focused
              ? "person-circle-outline"
              : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Mon compte" component={AccountScreen} />
      <Tab.Screen name="Réglages" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
