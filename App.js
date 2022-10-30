import Opening from ".src/components/pages/Opening";
import Animated from ".src/animated/Animated";
import { Text, View, StatusBar } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 3500);
  }, []);
  return (
    <View name='Opening' style={{flex:1}}>
      {show ? <Opening /> : <Animated />}
      <StatusBar style="auto" />
    </View>
  );
}
