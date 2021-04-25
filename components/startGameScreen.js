import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Card } from "./Card";
import { Colors } from "../constants/colors";
import { InputNumber } from "./InputNumber";
import { NumberContainer } from "./numberContainer";

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
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      console.log("choseNumber is wrong!" + choseNumber);
      Alert.alert("Invalid number!", "Numbas has to be between 0 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          color={Colors.primary}
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
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
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
