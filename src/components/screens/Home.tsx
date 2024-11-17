import {
  Button, ButtonProps,
  Image, Pressable,
  ScrollView, StyleProp,
  StyleSheet,
  Text,
  View, ViewStyle,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../types/Navigation";

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

type ActionProps = {
  onPress?: ButtonProps['onPress'],
  title: string
  style?: {
    button: StyleProp<ViewStyle>;
    text: StyleProp<ViewStyle>
  }
}

const Action = ({onPress, title, style }: ActionProps) => {
  return (
      <Pressable style={style?.button} onPress={onPress}>
        <Text style={style?.text}>{title}</Text>
      </Pressable>
  )
}

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Action title="Create" onPress={() => navigation.navigate(Routes.Create)} />
        <Action title="Search"  />

      </View>
    </ScrollView>
  );
};

export { HomeScreen };
