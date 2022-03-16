import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            first_name: '',
            last_name: '',
            email: '',
            password: ''
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
         <TextInput style = {styles.h2} placeholder = 'Email'></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Password'></TextInput>
         <Button title ='Login' color = 'black'  onPress={()=>navigation.navigate('Profile')}/>
        </View>
        <View style={styles.viewThree}></View>
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
    flex: 7,
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
    placeholderTextColor: 'black',
  },
  b1: {
    color: 'green'
  }
});

export default Login;