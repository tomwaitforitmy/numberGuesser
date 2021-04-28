import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import { MyTitleText } from "./MyTitleText";

export const GameHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <MyTitleText style={styles.headerTitle}>{props.title}</MyTitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#0a0a0a",
  },
});
