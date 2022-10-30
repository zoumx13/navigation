import * as Animatable from "react-native-animatable";
import React from "react";

export default function AnimatedAccount() {
  return (
    <Animatable.View>
      <Animatable.Text
        animation="bounce"
        iterationCount={"infinite"}
        direction="normal"
      >
        Mon compte..
      </Animatable.Text>
    </Animatable.View>
  );
}
