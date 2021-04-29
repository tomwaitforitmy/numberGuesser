import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Card } from "../components/Card";
import { Colors } from "../constants/colors";
import { InputNumber } from "../components/InputNumber";
import { NumberContainer } from "../components/numberContainer";
import { MyText } from "../components/MyText";
import { MyTitleText } from "../components/MyTitleText";
import { MyButton } from "../components/MyButton";

export const StartGameScreen = (props) => {
  console.log("StartGameScreen");
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
        <MyText>You selected</MyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MyButton onPress={() => props.onStartGame(selectedNumber)}>
          {"START GAME"}
        </MyButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screenContainer}>
        <MyTitleText style={styles.subTitle}>{"Start a new game!"}</MyTitleText>
        <Card style={styles.inputContainer}>
          <MyText>Select a number</MyText>
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
