import {Button, Text} from "react-native";
import {useState} from "react";


type DogProps = {
    name: string
}

const Dog = (props: DogProps) => {
    const [isHungry, setIsHungry] = useState(true)

    const getHungryMessage = () => {
        return isHungry === true ? 'He is hungry':  'He is not hungry'
    }

    const getHungryAssertive = () => {
        return isHungry ? 'Feeed me' : 'I have enough'
    }

    return (
	<>
		<Text>This is a dog</Text>
		<Text>His name is {props.name}</Text>
		<Text>{getHungryMessage()}</Text>
		<Button title={getHungryAssertive()}
    disabled={!isHungry}
    onPress={() => setIsHungry(false)}
    />
	</>
)
}

export default Dog