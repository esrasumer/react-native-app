import { View, Text, Button, FlatList } from "react-native"
import Item from "./Item";

data = [
    {
      id: 1,
      name: 'esra',
    },
    {
      id: 2,
      name: 'asli',
    },
    {
      id: 3,
      name: 'esma',
    }
  ];

export default function Users({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <FlatList 
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item}) => <Item item={item}/>}
            />
        </View>
    );
};

