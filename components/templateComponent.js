import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const GameHeader = (props) => {
  console.log(props.title);
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
