import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../styles";
import { useState, useEffect } from "react";
import AnimatedSettings from "../components/animated/AnimatedSettings";

export default function SettingsScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [loadAnimated, setLoadAnimated] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      async (e) => {
        setShow(false);
        setLoadAnimated(!loadAnimated);
        return () => unsubscribe();
      },
      [navigation]
    );
  });
  useEffect(() => {
    setTimeout(() => setShow(!show), 1500);
  }, [loadAnimated]);
  return (
    <View style={styles.mainview}>
      {show ? (
        <ScrollView>
          <Text>Settings</Text>
        </ScrollView>
      ) : (
        <AnimatedSettings />
      )}
    </View>
  );
}
