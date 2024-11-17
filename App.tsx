import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@components/screens/Home";
import { CreateScreen } from "@components/screens/Create";
import {RootStackParamList, Routes} from "./src/types/Navigation";
import {Image, View} from "react-native";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

type LogoTitleProps = {
    children: string;
    width: number;
    height: number;
    tintColor?: string
}

const LogoTitle = ({ width, height}: LogoTitleProps) => {
    return (
        <Image source={require("@assets/homeLogo.png")} style={{ width, height }} />
    )
}
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.Home} screenOptions={{
          headerTitle: (props) => <LogoTitle height={50} width={50} {...props}/>,
      }}>
        <Screen name={Routes.Home} component={HomeScreen} />
        <Screen name={Routes.Create} component={CreateScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
