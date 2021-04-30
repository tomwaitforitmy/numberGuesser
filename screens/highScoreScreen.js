import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { Colors } from "../constants/colors";
import { MyTitleText } from "../components/MyTitleText";
import { MyButton } from "../components/MyButton";
import { MyText } from "../components/MyText";

export const HighscoreScreen = (props) => {
  console.log("Game finished with: " + props.highScores);

  return (
    <View style={styles.screen}>
      <MyTitleText>High score with #rounds</MyTitleText>
      <View style={styles.guessListContainer}>
        <ScrollView contentContainerStyle={styles.guessListScrollView}>
          {props.highScores.map((score, index) => (
            <View key={index}>
              <MyText>{score}</MyText>
            </View>
          ))}
        </ScrollView>
        <MyButton onPress={props.onGoBack}>{"NEW GAME"}</MyButton>
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
  guessListContainer: {
    width: "80%",
    flex: 1,
    //always add flex 1 to be scrollable !!!
  },
  guessListScrollView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    //for scrollview, much better than flex 1 !!!
  },
});
