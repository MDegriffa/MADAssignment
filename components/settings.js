import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state ={
      token: ''
    };
}
componentDidMount(){
  this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.checkLoggedIn();
  });        
}

componentWillUnmount(){
  this._unsubscribe();
}

checkLoggedIn = async () => {
  let value = await AsyncStorage.getItem('@session_token');
  if(value !== null) {
    this.setState({token:value});
  }else{
      this.props.navigation.navigate("Login");
  }
}

logout = async () => {
  let token = await AsyncStorage.getItem('@session_token');
  await AsyncStorage.removeItem('@session_token');
  //await AsyncStorage.clear();
  return fetch("http://localhost:3333/api/1.0.0/logout", {
      method: 'post',
      headers: {
          "X-Authorization": token
      }
  })
  .then((response) => {
      if(response.status === 200){
          this.props.navigation.navigate("Login");
      }else if(response.status === 401){
          this.props.navigation.navigate("Login");
      }else{
          throw 'Something went wrong';
      }
  })
  .catch((error) => {
      console.log(error);
      ToastAndroid.show(error, ToastAndroid.SHORT);
  })
}

    render(){
     return (
      <View style={styles.flexContainer}>     
        <View style={styles.viewOne}>
        <Text style = {styles.h1}>SPACEBOOK</Text>
        </View>  
        <View style ={styles.viewTwo}>
        <Button title ='Account Info' color = 'black' onPress = {()=>this.props.navigation.navigate('Info')}/>
        </View>
        <View style={styles.viewThree}>
          <Button title = 'Logout' color= 'black' onPress={() => this.logout()}/>
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
  b1: {
    color: 'green'
  }
});

export default Settings