import * as Animatable from "react-native-animatable";
import React from "react";

export default function AnimatedSettings() {
  return (
    <Animatable.View>
      <Animatable.Text
        animation="bounce"
        iterationCount={"infinite"}
        direction="normal"
      >
        Réglages..
      </Animatable.Text>
    </Animatable.View>
  );
}
