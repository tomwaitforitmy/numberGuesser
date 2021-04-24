import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card } from "./Card";
import { Colors } from "../constants/colors";
import { InputNumber } from "./InputNumber";

export const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const onNumberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredValue);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) {
      console.log("choseNumber is wrong!" + choseNumber);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>;
  }

  console.log(props.title);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screenContainer}>
        <Text style={styles.subTitle}>{"Start a new game!"}</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <InputNumber
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            onChangeText={onNumberInputHandler}
            value={enteredValue}
          ></InputNumber>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.second}
                title="Reset"
                onPress={resetInputHandler}
              ></Button>
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={confirmInputHandler}
              ></Button>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
