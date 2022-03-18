import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

import Index from './components/Index';
import CreateAccount from './components/createAccount';
import Profile from './components/profile';
import Login from './components/login';
import Friends from './components/friends';
import Settings from './components/settings';
import Info from './components/info';

const Stack = createNativeStackNavigator();

class App extends Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name="Welcome" component={Index} options={{headerShown: false}}/>
            <Stack.Screen  name="Login" component={Login}/>
            <Stack.Screen  name="Profile" component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen  name="CreateAccount" component={CreateAccount}/>
            <Stack.Screen  name="Settings" component={Settings}/>
            <Stack.Screen  name="Friends" component={Friends}/>
            <Stack.Screen  name="Info" component={Info}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



export default App;