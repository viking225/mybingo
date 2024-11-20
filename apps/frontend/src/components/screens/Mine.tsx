import {
  Button,
  ButtonProps,
  Image,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../types/Navigation";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: "auto",
  },
});

const MineScreen = () => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>this is the mine screen</View>
    </ScrollView>
  );
};

export { MineScreen };
