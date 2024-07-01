import { View, Text } from "react-native";

export default function User(props) {
    return (
        <View>
            <Text>
                {JSON.stringify(props.data)}
            </Text>
        </View>
    )
}