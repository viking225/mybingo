import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@components/Home";
import { CreateBingoComponent } from "@components/CreateBingoComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <script src="http://localhost:8097"></script>
      <Stack.Navigator initialRouteName="Create">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={CreateBingoComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
