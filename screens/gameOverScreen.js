import React from "react";
import { Button, StyleSheet, Image, View } from "react-native";
import { MyText } from "../components/MyText";
import { Colors } from "../constants/colors";

export const GameOverScreen = (props) => {
  console.log("Game over:" + props.finalNumber);
  return (
    <View style={styles.container}>
      <MyText>The game is over!</MyText>
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
      <MyText>Your secret number '{props.finalNumber}'</MyText>
      <MyText>was found in {props.rounds} rounds.</MyText>
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
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.Primary,
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 20,
  },
});
