import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AccountScreen from "./AccountScreen";
import SettingsScreen from "./SettingsScreen";
import HomeScreen from "./HomeScreen";
import { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "../styles";
import MyTabs from "./MyTabs";

export default function Opening() {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState("");
  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
  };
  function LogScreen() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    async function Logged() {
      const newUserData = JSON.stringify({ email, password });
      setUserData(newUserData);
      await AsyncStorage.setItem("userData", newUserData);
      const jsonValue = await AsyncStorage.getItem("userData");
      console.log(JSON.parse(jsonValue));
      console.log("Bonjour !");
      setLogged(!logged);
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logscreentop}>
            <View>
              <Text style={styles.titlelogscreen}>Bonjour</Text>
            </View>
          </View>
          <View style={styles.logscreenmiddle}>
            <View>
              <Text>Veuillez vous identifier :</Text>
            </View>
            <View>
              <Text> Email</Text>
            </View>
            <View style={styles.input}>
              <TextInput onChangeText={onChangeEmail} value={email} require />
            </View>
            <View>
              <Text> Mot de passe</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
                require
              />
            </View>
            <View>
              <Button title="Valider" onPress={Logged} />
            </View>
          </View>
          <View style={styles.logscreenbottom}>
            <ImageBackground source={image} style={styles.logscreenimage} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <NavigationContainer>
      {logged == false ? <LogScreen /> : <MyTabs />}
    </NavigationContainer>
  );
}
