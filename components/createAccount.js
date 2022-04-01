/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
// import { render } from 'react-dom';
import {
  StyleSheet, Text, View, Button, TextInput,
} from 'react-native';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  signup = () => fetch('http://localhost:3333/api/1.0.0/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } if (response.status === 400) {
        throw new Error('Error');
      } else {
        throw new Error('Error');
      }
    })
    .then((responseJson) => {
      console.log('User created with ID: ', responseJson);
      this.props.navigation.navigate('Login');
    })
    .catch((error) => {
      console.log(error);
    });

  render() {
    return (
      <View style={styles.flexContainer}>
        <View style={styles.viewOne}>
          <Text style={styles.h1}>SPACEBOOK</Text>
        </View>
        <View style={styles.viewTwo}>
          <TextInput
            style={styles.h2}
            placeholder="First name"
            onChangeText={(first_name) => this.setState({ first_name })}
            value={this.state.first_name}
          />
          <TextInput
            style={styles.h2}
            placeholder="Last name"
            onChangeText={(last_name) => this.setState({ last_name })}
            value={this.state.last_name}
          />
          <TextInput
            style={styles.h2}
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            style={styles.h2}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Create account" color="black" onPress={() => this.signup()} />
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
    flex: 14,
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
  h2: {
    flex: 1,
    fontSize: 24,
    color: 'white',
    placeholderTextColor: 'white',
  },
  b1: {
    color: 'green',
  },
});

export default CreateAccount;
