import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NumberContainer } from "./numberContainer";
import { Card, Cards } from "./Card";
import { Colors } from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export const GameScreen = (props) => {
  console.log("Game starting with: " + props.userChoise);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoise)
  );

  const [rounds, setRounds] = useState(0);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userChoise, onGameOver } = props;

  //useEffect: runs after the component has been rendered
  //useRef: does not trigger re-render
  //useState: triggers re-render

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoise) ||
      (direction === "higher" && currentGuess > props.userChoise)
    ) {
      Alert.alert("Do not cheat!", "Make sure you give valid tips!", [
        {
          text: "Okay :( ... ",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else if (direction === "higher") {
      currentMin.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setRounds(rounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Give the opponent a hint</Text>
      <Card style={styles.buttonContainer}>
        <Button
          color={Colors.second}
          title="LOWER"
          onPress={nextGuessHandler.bind(this, "lower")}
        />
        <Button
          color={Colors.primary}
          title="HIGHER"
          onPress={nextGuessHandler.bind(this, "higher")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
