import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state ={
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    };
}
    render(){
        const navigation = this.props.navigation;
     return (  
      <View style={styles.flexContainer}>        
        <View style={styles.viewOne}>
        <Text style = {styles.h1}>SPACEBOOK</Text>
        </View>  
        <View style ={styles.viewTwo}>
         <TextInput style = {styles.h2} placeholder = 'First name'></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Last name'></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Email'></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Password'></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Confirm Password'></TextInput>
         <Button title ='Create account' color = 'black'/>
        </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewOne: {
    flex: 1,
    backgroundColor: 'black',
    alignItems:'center',
  },
  viewTwo: {
    flex: 14,
    backgroundColor: 'darkcyan',
    justifyContent:'flex-end', 

  },
  viewThree: {
    flex: 7,
    backgroundColor: 'darkcyan'
  },
  h1: {
    flex:1,
    fontSize: 36,
    color: 'white',
    
  },
  h2: {
    flex:1,
    fontSize: 24,
    color: 'white',
    placeholderTextColor: 'black'
  },
  b1: {
    color: 'green'
  }
});

export default CreateAccount;