import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { MyText } from "../components/MyText";
import { MyTitleText } from "../components/MyTitleText";
import { MyButton } from "../components/MyButton";
import { Colors } from "../constants/colors";

export const GameOverScreen = (props) => {
  console.log("Game over:" + props.finalNumber + " for " + props.userName);
  return (
    <View style={styles.container}>
      <MyTitleText>The game is over!</MyTitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://dictionary.cambridge.org/de/images/thumb/summit_noun_002_36618.jpg?version=5.0.161",
          // }}
        />
      </View>
      <MyText style={styles.resultText}>
        {props.userName} your secret number{" "}
        <Text style={styles.highlight}>{props.finalNumber}</Text> was found in{" "}
        <Text style={styles.highlight}>{props.rounds}</Text> rounds.
      </MyText>
      <MyButton onPress={props.onStartGame}>{"START NEW GAME"}</MyButton>
      <MyButton onPress={props.onViewHighScore}>{"VIEW HIGH SCORE"}</MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 20,
  },
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
