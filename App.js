import { Button, StyleSheet, TouchableHighlight, TouchableOpacity, View, Text, handleClick, FlatList } from 'react-native';
import Title from './src/components/Title';
import Header from './src/components/Header';
import User from './src/components/User';
import Users from './src/components/Users';
import Counter from './src/components/Counter';
import { useState } from 'react';

export default function App() {

  // const [name, setName] = useState('esra');
  // const [age, setAge] = useState(22);
  // const [isVisible, setIsvisible] = useState(true);
  // const [user, setUser] = useState({ id: 1, name: 'esra' });
  // const handlePress = () => {
  //   setUser({ ...user, id: 5})
  // }
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'esra' },
  //   {
  //     id: 2,
  //     name: 'mehmet',
  //   },
  // ]);

  // const handlePress = () => {
  //   setUsers((prev) => [...prev, { id: Math.floor(Math.random() * 1000), name: 'ayşe' }]);
  // };

  return (
    <View style={styles.container}>
      <Counter />



      {/* <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        }
      />
      <Button title='add' onPress={handlePress} /> */}

      {/* keyExtractor normal id tanımmlamak için key yerine geçer */}
      {/* bu yapı kullanılmaz uzun arraylerde onun yerine flatlist kullanılır */}
      {/* {users.map((user) => (
        <Text key={user.id} style={styles.text}>{user.name}</Text>
      ))} */}
      {/* <Text style={styles.text} onPress={handlePress}>ID:{user.id}</Text>
      <Text style={styles.text}>name:{user.name}</Text> */}
      {/* <Button title={isVisible ? 'gizle' : 'göster'} onPress={() => setIsvisible(!isVisible)}></Button>
      {isVisible && (
        <>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Button title='click' onPress={() => setName('ayşe')}>
            click
          </Button>
          <Button title='yas' onPress={() => setAge(30)}>yaş</Button>
        </>
      )
      } */}
      {/*       
      <Button title='Click Button' onPress={() => alert("merhaba!")} />
      <TouchableOpacity title='TouchableOpacity' onPress={handleClick} >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={() => alert("Pressed!")}
      >
        <Text>click TouchableHighlight</Text>
      </TouchableHighlight> */}



      {/* <Title text={11} color="red" number={1} isVisible={true} /> */}
      {/* <Title text="javascript" color="blue" numberOfLines={2} />
      <Title text="react" color="green" numberOfLines={3} /> */}
      {/* <User data={{ id: 1, name: 'mehmet' }} />
      <Users data={['ahmet', 'mehmet', 'ayşe']} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 30,
  }
});
