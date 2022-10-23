import * as React from 'react';
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChangeLog from '../lib/ChangeLog';
import styles from "../styles";

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }