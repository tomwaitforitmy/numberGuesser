import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameHeader } from "./components/gameHeader";
import { StartGameScreen } from "./components/startGameScreen";

export default function App() {
  console.log("App start");
  return (
    <View style={styles.screen}>
      <GameHeader title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
