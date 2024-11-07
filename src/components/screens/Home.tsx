import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    logo: { width: 200, height: 200 },
    page: {
        backgroundColor: 'white',
        width: "100%"
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 'auto',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const HomeScreen = () => {
  return (
    <ScrollView style={styles.page}>
        <View style={styles.container}>
            <Image
                source={require('@assets/homeLogo.png')}
                style={styles.logo}
            />
            <Button title="Create" />

        </View>
    </ScrollView>
  );
};

export { HomeScreen };
