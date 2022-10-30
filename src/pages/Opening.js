import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import MyTabs from "./MyTabs";
import styles from "../../styles";
import { hasAuthenticated } from "../services/AutheAPI";
import Auth from "../contexts/Auth"

export default function Opening() {
  
  const [isAuthenticated,setIsAuthenticated] = useState(hasAuthenticated())



  const [logged, setLogged] = useState(false);
  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
  };
  function LogScreen() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = { password: password, email: email };
        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers ({
                "Content-Type": "application/json"
            })
        }
        let reponse = await fetch("http://192.168.0.44:8080/login", options);
        let donnes = await reponse.json();
        console.log(donnes)
        await AsyncStorage.setItem("token", donnes.token);
        if(donnes.token){
            setLogged(!logged)
        }
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
              <Button title="Valider" onPress={handleSubmit}/>
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
