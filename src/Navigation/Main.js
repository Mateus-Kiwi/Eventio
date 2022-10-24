import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons'


//Screens
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import CreateScreen from './screens/Create';


// Screen names
const homeName = 'Eventio';
const searchName = 'Search';
const createName = 'Create';

const Tab = createBottomTabNavigator();


export default function Main() {
    return(
      <NavigationContainer independent={true}>
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline'
                    } else if (rn === createName) {
                        iconName = focused ? 'add' : 'add-outline'
                    }

                    return <IonIcons name={iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: '#552583',
                inactiveTintColor: '#FDB927',
                activeBackgroundColor: '#f8ebff',
                inactiveBackgroundColor: '#f8ebff',
                labelStyle: { paddingBottom: 0, fontSize: 0, },
                style: {padding: 10, height: 70}
            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name={searchName} component={SearchScreen} options={{headerShown: false}}/>
            <Tab.Screen name={createName} component={CreateScreen} options={{headerShown: false}}/>

        </Tab.Navigator>
      </NavigationContainer>
    );
}

