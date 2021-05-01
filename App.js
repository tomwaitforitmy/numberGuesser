import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { GameHeader } from "./components/gameHeader";
import { StartGameScreen } from "./screens/startGameScreen";
import { GameScreen } from "./screens/gameScreen";
import { GameOverScreen } from "./screens/gameOverScreen";
import { HighscoreScreen } from "./screens/highScoreScreen";

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
  const [userName, setUserName] = useState("");
  const [viewHighscore, setViewHighscore] = useState(false);
  const [highScores, setHighScores] = useState([]);

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

  const startGameHandler = (selectedNumber, name) => {
    setUserNumber(selectedNumber);
    setNumberOfRounds(0);
    setUserName(name);
  };

  const gameOverHandler = (rounds) => {
    setNumberOfRounds(rounds);
    setHighScores((curHighScores) => [
      userName + " with #" + rounds,
      ...curHighScores,
    ]);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} userName={userName}/>;

  const restartGameHandler = () => {
    setViewHighscore(false);
    setUserNumber(null);
    setNumberOfRounds(0);
  };

  const onViewHighScoreHandler = () => {
    setViewHighscore(true);
  };

  if (viewHighscore) {
    content = (
      <HighscoreScreen
        highScores={highScores}
        onGoBack={restartGameHandler}
      ></HighscoreScreen>
    );
  } else if (userNumber && numberOfRounds === 0) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    content = (
      <GameOverScreen
        finalNumber={userNumber}
        rounds={numberOfRounds}
        userName={userName}
        onStartGame={restartGameHandler}
        onViewHighScore={onViewHighScoreHandler}
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
