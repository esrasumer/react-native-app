import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Item({ item, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("UserDetail")}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#d8d8d8',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 24,
    },
});