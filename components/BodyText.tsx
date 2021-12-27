import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: {};
}

const BodyText = (props: Props) => {
  return (
    <Text style={{ ...styles.screen, ...props.style }}>{props.children}</Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  screen: {
    fontFamily: "open-sans",
  },
});
