import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export const GameHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{props.title}</Text>
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
    fontSize: 18,
  },
});
