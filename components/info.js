import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image, TextInput, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state ={
      prevFirst_name: '',
      prevLast_name: '',
      prevEmail: '',
      prevPassword: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
}
componentDidMount() {
  this.unsubscribe = this.props.navigation.addListener('focus', () => {
    this.checkLoggedIn();
  });
  this.getData();
}

componentWillUnmount() {
  this.unsubscribe();
}

getData = async () => {
  const value = await AsyncStorage.getItem('@session_token');
  const userID = await AsyncStorage.getItem('@session_id');
  return fetch("http://localhost:3333/api/1.0.0/user/" + userID, {
        'headers': {
          'X-Authorization':  value
        }
      })
      .then((response) => {
          if(response.status === 200){
              return response.json()
          }else if(response.status === 401){
            this.props.navigation.navigate("Login");
          }else{
              throw 'Something went wrong';
          }
      })
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          userData: responseJson
        })
      })
      .catch((error) => {
          console.log(error);
      })
}

checkLoggedIn = async () => {
  const value = await AsyncStorage.getItem('@session_token');
  if (value == null) {
      this.props.navigation.navigate('Login');
  }
};


updateDetails = async () =>  {
  let to_send = {};
  const value = await AsyncStorage.getItem('@session_token');
  const userID = await AsyncStorage.getItem('@session_id');

  if (this.state.first_name != this.state.prevFirst_name){
    to_send['first_name'] = this.state.first_name;
  }

  if (this.state.last_name != this.state.prevLast_name){
    to_send['last_name'] = this.state.last_name;
  }

  if (this.state.email != this.state.prevEmail){
    to_send['email'] = parseInt(this.state.email);
  }

  if (this.state.password != this.state.prevPassword){
    to_send['password'] = parseInt(this.state.password);
  }

  console.log(JSON.stringify(to_send));

  return fetch("http://localhost:3333/api/1.0.0/user/" + userID, {
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(to_send)
  })
  .then((response) => {
    console.log("Details changed");
  })
  .catch((error) => {
    console.log(error);
  })
}

    render(){
     return (
      <View style={styles.flexContainer}>     
        <View style={styles.viewOne}>
        <Text style = {styles.h1}>SPACEBOOK</Text>
        </View>  
        <View style ={styles.viewTwo}>
        <TextInput style = {styles.h2} placeholder = 'First name' onChangeText={(first_name) => this.setState({first_name})}
                    value={this.state.first_name}></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Last name' onChangeText={(last_name) => this.setState({last_name})}
                    value={this.state.last_name}></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Email'  onChangeText={(email) => this.setState({email})}
                    value={this.state.email}></TextInput>
         <TextInput style = {styles.h2} placeholder = 'Password' onChangeText={(password) => this.setState({password})}
                    value={this.state.password}></TextInput>
        <Button title ='Change details' color = 'black' onPress={() => this.updateDetails()}/>
        </View>
        <View style={styles.viewThree}>
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
    color: 'white',
    placeholderTextColor: 'white'
  },
  b1: {
    color: 'green'
  }
});

export default Settings