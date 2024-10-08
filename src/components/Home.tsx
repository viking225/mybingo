import { Image, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Dog from "./Dog";
import React from "react";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Text>{"Some text"}</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
      <Dog name="eve" />
      <Dog name="boris" />
    </ScrollView>
  );
};

export { HomeScreen };
