import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { Profiler } from 'react/cjs/react.production.min';

class Profile extends Component {
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
        </View>
        <View style={styles.viewThree}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.h2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Text>
      </ScrollView>
          <Button title ='Friends' color = 'black'/>
          <Button title = 'Settings' color= 'black'/>
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
    flex: 3,
    backgroundColor: 'darkcyan',
    
  },
  viewThree: {
    flex: 7,
    backgroundColor: 'darkcyan',
    justifyContent:'flex-end'
  },
  h1: {
    flex:1,
    fontSize: 36,
    color: 'white',
    
  },
  h2: {
    flex:1,
    fontSize: 36,
    color: 'white',
    alignItems: 'center'
  },
  b1: {
    color: 'green'
  },
  scrollView: {
    backgroundColor: 'darkcyan',
    marginHorizontal: 50,
  },
});

export default Profile