import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import defaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";

interface Props {
  userChoice: number;
  onGameOver: (x: number) => void;
}

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (
  listLength: number,
  itemData: { index: number; item: string | number }
) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = (props: Props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<(number | string)[]>([
    initialGuess.toString(),
  ]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, onGameOver, userChoice]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess'</Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={"white"} />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color={"white"} />
        </MainButton>
      </Card>
      <View style={styles.listCoontainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess: number, i: number) =>
            renderListItem(guess, pastGuesses.length - i)
          )}
        </ScrollView> */}
        <FlatList
          data={pastGuesses}
          keyExtractor={(item) => item}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
  listCoontainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GameScreen;
