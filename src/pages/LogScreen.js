import * as React from "react";
import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import styles from "../../styles";
import { AuthContext } from "../contexts/Auth";

export default function LogScreen() {
  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
  };
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const { signIn } = useContext(AuthContext)
  async function Logged() {
      let data = { password: password, email: email };
      let options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      let reponse = await fetch("http://192.168.0.44:8080/login", options);
      let donnes = await reponse.json();
      console.log(donnes);
      if (donnes.token) {
        await AsyncStorage.setItem("token", donnes.token);
        signIn()
      }
    };
  return (
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
  );
}
