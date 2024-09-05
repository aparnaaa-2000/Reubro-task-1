import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';




const Stack = createNativeStackNavigator();
 function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
   <Stack.Screen name='LoginScreen' component={LoginScreen}/>
   <Stack.Screen name='Dashboard' component={Dashboard}/>

     </Stack.Navigator>

    </NavigationContainer>
   
)};
export default App;