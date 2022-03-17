import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            email: '',
            password: ''
        };
    }

    login = async () => {

      //Validation here...

      return fetch("http://localhost:3333/api/1.0.0/login", {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
      })
      .then((response) => {
          if(response.status === 200){
              return response.json()
          }else if(response.status === 400){
              throw 'Invalid email or password';
          }else{
              throw 'Something went wrong';
          }
      })
      .then(async (responseJson) => {
              console.log(responseJson);
              await AsyncStorage.setItem('@session_token', responseJson.token);
              await AsyncStorage.setItem('@session_id', responseJson.id);
              this.props.navigation.navigate("Profile");
      })
      .catch((error) => {
          console.log(error);
      })
  }
    render(){
        const navigation = this.props.navigation;
     return (  
      <View style={styles.flexContainer}>        
        <View style={styles.viewOne}>
        <Text style = {styles.h1}>SPACEBOOK</Text>
        </View>  
        <View style ={styles.viewTwo}>
         <TextInput style = {styles.h2} placeholder = 'Email' 
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}></TextInput>
         <Button title ='Login' color = 'black' onPress={() => this.login()}/>
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