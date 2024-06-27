import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>esra</Text>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>react native</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>react</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>react</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  box1: {
    backgroundColor: 'blue',
  },
  box2: {
    backgroundColor: '#afff'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'gray',
    fontSize: 30,
  }
});
