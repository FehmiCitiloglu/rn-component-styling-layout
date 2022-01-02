import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
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
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState<number>(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState<number>(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
      setAvailableDeviceWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText> The Game is Over!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceWidth / 30,
            },
          }}
        >
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
        <View
          style={{
            ...styles.resultContainer,
            ...{
              marginVertical: Dimensions.get("window").width / 60,
            },
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              ...{
                fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
              },
            }}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <BodyText>Number was: {props.userNumber}</BodyText>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
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
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
