import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const GameOverScreen = (props) => {
  console.log("Game over:" + props.finalNumber);
  return (
    <View style={styles.container}>
      <Text>The game is over!</Text>
      <Text>Your secret number '{props.finalNumber}'</Text>
      <Text>was found in {props.rounds} rounds.</Text>
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
