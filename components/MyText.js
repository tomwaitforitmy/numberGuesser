import React from "react";
import { StyleSheet, Text } from "react-native";

export const MyText = (props) => {
  return (
    <Text style={{ ...styles.defaultText, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 14,
    fontFamily: "open-sans",
  },
});
