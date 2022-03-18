import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Pictures from '../assets/blackhole.png';

class Index extends Component {
    render(){
      const navigation = this.props.navigation;
     return (
      <View style={styles.flexContainer}>     
        <View style={styles.viewOne}>
        <Text style = {styles.h1}>SPACEBOOK</Text>
         
        </View>
        <View style ={styles.viewTwo}>

        <Button title ='Create account' color = 'black' onPress={()=>navigation.navigate('CreateAccount')} />
        </View>
        <View style={styles.viewThree}>
          <Button title = 'login' color= 'black' onPress={()=>navigation.navigate('Login')}/>
        </View>
      </View>
    );
}
}

//<Image
//source={{ uri: Pictures }}
//style={{ width: 300, height: 300 }}/>

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

export default Index;