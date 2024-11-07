import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@components/screens/Home";
import { CreateBingoComponent } from "@components/CreateBingoComponent";

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <script src="http://localhost:8097"></script>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Create" component={CreateBingoComponent} />
      </Navigator>
    </NavigationContainer>
  );
}
