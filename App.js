import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>react native</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.child1}></View>
        <View style={styles.child2}></View>
        <View style={styles.child3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: "column",
  },
  box1: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "azure",
    justifyContent: "space-between",
    alignItems:"center",
  },
  // child4:{
  //   flex:1,
  //   backgroundColor:"red",
  // },
  // child5:{
  //   flex:1,
  //   backgroundColor:"bisque",
  // },
  child1: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  child2: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
  child3: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
  }
});
