/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
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
    return fetch(`http://localhost:3333/api/1.0.0/user/${userID}`, {
      headers: {
        'X-Authorization': value,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } if (response.status === 401) {
          console.log('Failed to update');
          // this.props.navigation.navigate("Login");
        } else {
          throw new Error();
        }
      })
      .then((responseJson) => {
        this.setState({
          userData: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  checkLoggedIn = async () => {
    const value = await AsyncStorage.getItem('@session_token');
    if (value == null) {
      this.props.navigation.navigate('Login');
    }
  };

  updateDetails = async () => {
    const toSend = {};

    const value = await AsyncStorage.getItem('@session_token');
    const userID = await AsyncStorage.getItem('@session_id');

    if (this.state.first_name !== this.state.prevFirst_name) {
      toSend.first_name = this.state.first_name;
    }

    if (this.state.last_name !== this.state.prevLast_name) {
      toSend.last_name = this.state.last_name;
    }

    if (this.state.email !== this.state.prevEmail) {
      toSend.email = this.state.email;
    }

    if (this.state.password !== this.state.prevPassword) {
      toSend.password = this.state.password;
    }

    console.log(JSON.stringify(toSend));

    return fetch(`http://localhost:3333/api/1.0.0/user/${userID}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'X-Authorization': value,
      },
      body: JSON.stringify(toSend),
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
      .catch((error) => {
        console.log(error);
      });
  };

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
          <Button title="Change details" color="black" onPress={() => this.updateDetails()} />
        </View>
        <View style={styles.viewThree} />
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

export default Settings;
