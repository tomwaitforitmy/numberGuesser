import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameHeader } from "./components/gameHeader";
import { StartGameScreen } from "./components/startGameScreen";
import { GameScreen } from "./components/gameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoise={userNumber} />;
  }

  console.log("App start");
  return (
    <View style={styles.screen}>
      <GameHeader title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
