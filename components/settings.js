import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state ={ 

    };
}
    render(){
     return (
      <View style={styles.flexContainer}>        
        <View style={styles.viewOne}>
        <Text style = {styles.h1}>SPACEBOOK</Text>
        </View>  
        <View style ={styles.viewTwo}>
        <Button title ='About' color = 'black'/>
        </View>
        <View style={styles.viewThree}>
          <Button title = 'Logout' color= 'black'/>
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