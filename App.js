import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameHeader } from "./components/gameHeader";
import { StartGameScreen } from "./components/startGameScreen";
import { GameScreen } from "./components/gameScreen";
import { GameOverScreen } from "./components/gameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setNumberOfRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setNumberOfRounds(rounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  const restartGameHandler = () => {
    setUserNumber();
    setNumberOfRounds(0);
    content = <StartGameScreen onStartGame={startGameHandler} />;
  };

  if (userNumber && numberOfRounds === 0) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    content = (
      <GameOverScreen
        finalNumber={userNumber}
        rounds={numberOfRounds}
        onStartGame={restartGameHandler}
      ></GameOverScreen>
    );
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
