import { View, Text, Button } from "react-native"

export default function Users({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>
                users screen
            </Text>
            <Button title="go to home" onPress={() => navigation.navigate("Home")} />
            <Button title="geri" onPress={() =>navigation.goBack()}/>
        </View>
    );
};

