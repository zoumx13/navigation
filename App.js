// import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChangeLog from "./lib/ChangeLog"
import styles from "./styles";
import MyTabs from "./components/mytabs";

export default function App() {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  async function Logged() {
    console.log(logged);
    const newUserData = JSON.stringify({ email, password });
    setUserData(newUserData);
    await AsyncStorage.setItem("userData", newUserData);
    const jsonValue = await AsyncStorage.getItem("userData");
    console.log(JSON.parse(jsonValue));
    console.log("Bonjour !");
    setLogged(!logged);
    console.log(logged);
  }
  async function Deconnect(){
    setLogged(!logged)
  }
  if (logged == true) {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
    );
  }
}
