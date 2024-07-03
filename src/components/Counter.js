import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>count: {count}</Text>
            <Button title="arttır" onPress={() => setCount(count + 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Counter;
