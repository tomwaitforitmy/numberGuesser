import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { GameHeader } from "./components/gameHeader";
import { StartGameScreen } from "./components/startGameScreen";
import { GameScreen } from "./components/gameScreen";
import { GameOverScreen } from "./components/gameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  console.log("App start");
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    console.log("loading data");
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setNumberOfRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setNumberOfRounds(rounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  const restartGameHandler = () => {
    setUserNumber(null);
    setNumberOfRounds(0);
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
