/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (

      <View style={styles.flexContainer}>
        <View style={styles.viewOne}>
          <Text style={styles.h1}>SPACEBOOK</Text>
        </View>
        <View style={styles.viewTwo}>
          <Button title="Create account" color="black" />
        </View>
        <View style={styles.viewThree}>
          <Button title="login" color="black" />
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
    alignItems: 'center',
  },
  viewTwo: {
    flex: 7,
    backgroundColor: 'darkcyan',
    justifyContent: 'flex-end',
  },
  viewThree: {
    flex: 7,
    backgroundColor: 'darkcyan',
  },
  h1: {
    flex: 1,
    fontSize: 36,
    color: 'white',

  },
  b1: {
    color: 'green',
  },
});

export default Friends;
