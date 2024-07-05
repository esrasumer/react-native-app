import * as React from 'react'; import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import Users from './src/screens/Users'
import UserDetail from './src/screens/UserDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:"kullanicilar"}}
        />
        <Stack.Screen 
        name="Users" 
        component={Users}
        options={{title:"kullanicilar"}}
        />
        <Stack.Screen 
        name="UserDetail" 
        component={UserDetail}
        options={{title:"kullanicilar"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;