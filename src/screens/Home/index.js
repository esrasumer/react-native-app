import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>
                home screen
            </Text>
            <Button title="go to users" onPress={() => navigation.navigate("Users")} />
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'red',
//     },
//     text: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// })