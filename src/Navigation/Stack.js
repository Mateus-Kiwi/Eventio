

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator()

import Login from './screens/Login';
import Home from './Main';
import Register from './screens/Register'

export default function App() {
  return (
 <NavigationContainer independent={true}>
   <Stack.Navigator LoginRouteName='Login'>
     <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
     <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
     <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
   </Stack.Navigator>
 </NavigationContainer>
  );
}