import { View, Text } from 'react-native';

export default function Users(props) {
    return (
        <View>
            <Text>
                {JSON.stringify(props.data, null, 2)}
                {JSON.stringify(props.data, null, 2)}
            </Text>
        </View>
    )
}