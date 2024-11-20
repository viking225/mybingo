import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MineScreen } from "@components/screens/Mine";
import { CreateScreen } from "@components/screens/Create";
import { RootStackParamList, Routes } from "@/types/Navigation";
import { Image, View } from "react-native";
import { SearchScreen } from "@components/screens/Search";
import { HelpScreen } from "@components/screens/Help";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

type LogoTitleProps = {
  children: string;
  width: number;
  height: number;
  tintColor?: string;
};

const HEADER_SIZE = 100;

const LogoTitle = ({ width, height }: LogoTitleProps) => {
  return (
    <Image source={require("@assets/homeLogo.png")} style={{ width, height }} />
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.Mine}
        screenOptions={{
          headerStyle: {
            height: HEADER_SIZE,
          },
          headerTitle: (props) => (
            <LogoTitle height={HEADER_SIZE} width={HEADER_SIZE} {...props} />
          ),
        }}
      >
        <Screen name={Routes.Mine} component={MineScreen} />
        <Screen name={Routes.Search} component={SearchScreen} />
        <Screen name={Routes.Create} component={CreateScreen} />
        <Screen name={Routes.Help} component={HelpScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
