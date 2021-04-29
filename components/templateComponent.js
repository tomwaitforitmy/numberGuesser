import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const GameHeader = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
