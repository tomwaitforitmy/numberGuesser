import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyText } from "./MyText";

export const GuessListItem = (props) => {
  return (
    <View style={{ ...styles.itemContainer, ...props.style }}>
      <MyText>#{props.rounds}</MyText>
      <MyText>{props.guess}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
