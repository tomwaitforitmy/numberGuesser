import React from "react";
import { StyleSheet, Text } from "react-native";

export const MyTitleText = (props) => {
  return (
    <Text style={{ ...styles.defaultText, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
