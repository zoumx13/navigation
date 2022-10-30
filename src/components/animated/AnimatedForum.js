import * as Animatable from "react-native-animatable";
import React from "react";

export default function AnimatedForum() {
  return (
    <Animatable.View>
      <Animatable.Text
        animation="bounce"
        iterationCount={"infinite"}
        direction="normal"
      >
        Forum..
      </Animatable.Text>
    </Animatable.View>
  );
}
