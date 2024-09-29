import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View} from "react-native";
import Size from '@constants/styles/size'
import {BingoComponent} from "@components/BingoComponent";

function allowNumberOnly(input: string, dispatch: React.Dispatch<React.SetStateAction<string>>): void {
    input.replace(/[^0-9]/g, '')
    console.log('input: ', input)
    dispatch(input)
}

const CreateBingoComponent: React.FC = () => {
    const [width, setWidth] = useState<string>("3")
    const [height, setHeight] = useState<string>("3")
    const getNumberParams = () => ({
        width: Number(width),
        height: Number(height)
    })
    return (
	<View style={styles.container}>
		<Text style={styles.title}>Parameter for the bingo</Text>
        <View
            style={styles.divider}
        />
		<View style={styles.inputContainer}>
            <>
                Width:
			    <TextInput style={styles.input} value={`${width}`} placeholder="Width" keyboardType="numeric" onChangeText={(text) => allowNumberOnly(text, setWidth)}/>
            </>
            <>
                Height:
			    <TextInput style={styles.input} value={`${height}`} placeholder="Height" keyboardType="numeric" onChangeText={(text) => allowNumberOnly(text, setHeight)}/>
            </>
		</View>
        <View style={styles.preview}>
            <BingoComponent key={`${getNumberParams().width}-${getNumberParams().height}`} width={getNumberParams().width} height={getNumberParams().height}/>
        </View>
	</View>
    )
}

const styles = StyleSheet.create({
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 20
    },
    container: {
        width: "90%",
        height: "100%",
        display: "flex",
        marginHorizontal: "auto",
        fontSize: Size.text.default,
        backgroundColor: "white",
        padding: 20,
        paddingBottom: 50
    },
    title: {
        fontSize: Size.text.h1,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: "auto"
    },
    input: {
        marginLeft: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1
    },
    preview: {
        marginTop: 20,
        maxHeight: 800
    }
})

export {
    CreateBingoComponent
}