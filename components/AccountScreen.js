import * as React from 'react';
import { Button, Text, View } from "react-native";
import styles from "../styles";

export default function AccountScreen(){
  function Deconnect(){
    console.log(logged);
  }
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account</Text>
    </View> 
    )
  }