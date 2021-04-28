import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import { MyText } from "./MyText";

export const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <MyText style={styles.number}>{props.children}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.second,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.second,
    fontSize: 22,
  },
});
