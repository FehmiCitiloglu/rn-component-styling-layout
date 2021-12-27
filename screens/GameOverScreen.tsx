import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

interface GameOverScreenProps {
  userNumber: number | null;
  roundsNumber: number;
  onRestart: () => void;
}

const GameOverScreen: React.FunctionComponent<GameOverScreenProps> = (
  props
) => {
  return (
    <View style={styles.screen}>
      <TitleText> The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          style={styles.image}
          source={require("../assets/success.png")}
          //   source={{
          //     uri: "https://www.apricottours.pk/wp-content/uploads/2018/09/1-12.jpg",
          //   }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
