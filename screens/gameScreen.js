import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Button, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NumberContainer } from "../components/numberContainer";
import { Card } from "../components/Card";
import { Colors } from "../constants/colors";
import { MyText } from "../components/MyText";
import { MyButton } from "../components/MyButton";
import { GuessListItem } from "../components/GuessListItem";

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
  const initialGuess = generateRandomBetween(1, 100, props.userChoise);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userChoise, onGameOver } = props;

  //useEffect: runs after the component has been rendered
  //useRef: does not trigger re-render
  //useState: triggers re-render
  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(pastGuesses.length);
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
      currentMin.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    // setRounds(rounds + 1);
    //using currentGuess here not possible, because it is not updated, yet.
    setPastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <MyText>Opponent's guess</MyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <MyText>Give the opponent a hint</MyText>
      <Card style={styles.buttonContainer}>
        <MyButton
          containerStyle={styles.lowerButton}
          onPress={nextGuessHandler.bind(this, "lower")}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </MyButton>
        <MyButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MyButton>
      </Card>
      <View style={styles.guessList}>
        <ScrollView>
          {pastGuesses.map((guess, index) => (
            <GuessListItem
              key={guess}
              guess={guess}
              rounds={pastGuesses.length - index}
            ></GuessListItem>
          ))}
        </ScrollView>
      </View>
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
    width: 400,
    maxWidth: "90%",
  },
  lowerButton: {
    color: Colors.second,
  },
  guessList: {
    width: "80%",
  },
});
