
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "../../../styles";

export default function Animated() {
  return (
    <View style={styles.containerAnimated}>
      <LottieView
        source={require("../../../assets/19865-player-kicking-football-animation.json")}
        style={styles.animation}
        autoPlay
      />
      </View>
  );
}
