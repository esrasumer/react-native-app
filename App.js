import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Header from './src/components/Header';
import User from './src/components/User';
import Users from './src/components/Users';

export default function App() {
  return (
    <View style={styles.container}>
      <Title text="merhaba react native" color="red" numberOfLines={1} />
      <Title text="javascript" color="blue" numberOfLines={2} />
      <Title text="react" color="green" numberOfLines={3} />
      <User data={{ id: 1, name: 'mehmet' }} />
      <Users data={['ahmet', 'mehmet', 'ayşe']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
