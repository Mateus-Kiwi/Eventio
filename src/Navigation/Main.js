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
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search'
                    } else if (rn === createName) {
                        iconName = focused ? 'add' : 'add-outline'
                    }

                    return <IonIcons name={iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                
                activeTintColor: '#db7f67',
                inactiveTintColor: '#a3a3a3',
                activeBackgroundColor: '#fff9f7',
                inactiveBackgroundColor: '#fff9f7',
                labelStyle: { paddingBottom: 0, fontSize: 0, },
                style: {padding: 10, height: 70}
            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={searchName} component={SearchScreen}/>
            <Tab.Screen name={createName} component={CreateScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    );
}

