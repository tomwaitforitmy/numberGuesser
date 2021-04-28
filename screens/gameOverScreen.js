import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MyText } from "../components/MyText";

export const GameOverScreen = (props) => {
  console.log("Game over:" + props.finalNumber);
  return (
    <View style={styles.container}>
      <MyText>The game is over!</MyText>
      <MyText>Your secret number '{props.finalNumber}'</MyText>
      <MyText>was found in {props.rounds} rounds.</MyText>
      <Button title="START NEW GAME" onPress={props.onStartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
