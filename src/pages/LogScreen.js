import * as React from "react";
import { Text, TextInput, View, Button } from "react-native";
import styles from "../../styles";
import { useState, useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../contexts/Auth";

export default function LogScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [userData, setUserData] = useState("");
  const {signIn} = useContext(AuthContext) 
  return (
    <View style={styles.mainview}>
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
        <Button title="Valider" onPress={signIn()} />
      </View>    
    </View>
  );
}
