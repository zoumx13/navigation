import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Button, Text, View } from "react-native";
import styles from "../styles";
import { useEffect, useState } from "react";

export default function AccountScreen() {
  const [email, setEmail] = useState('')
  async function Load() {
    const jsonValue = await AsyncStorage.getItem("userData");
    const user = JSON.parse(jsonValue);
    setEmail(user.email)
  }
  useEffect(() => {
    Load();
  },[]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Account</Text>
      </View>
      <View>
        <Text> Email : {email}</Text>
      </View>
    </View>
  );
}
