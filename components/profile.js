/* eslint-disable consistent-return */
/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button, ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Profiler } from 'react/cjs/react.production.min';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
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
          this.props.navigation.navigate('Login');
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

  render() {
    return (
      <View style={styles.flexContainer}>
        <View style={styles.viewOne}>
          <Text style={styles.h1}>SPACEBOOK</Text>
        </View>
        <Text style={{ color: 'white' }}>
          Welcome:
          {this.state.userData.first_name}
          {' '}
          {this.state.userData.last_name}
        </Text>
        <View style={styles.viewTwo} />

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
          <Button title="Friends" color="black" onPress={() => this.props.navigation.navigate('Friends')} />
          <Button title="Settings" color="black" onPress={() => this.props.navigation.navigate('Settings')} />
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
    flex: 3,
    backgroundColor: 'darkcyan',
  },
  viewThree: {
    flex: 7,
    backgroundColor: 'darkcyan',
    justifyContent: 'flex-end',
  },
  h1: {
    flex: 1,
    fontSize: 36,
    color: 'white',
  },
  h2: {
    flex: 1,
    fontSize: 36,
    color: 'white',
    alignItems: 'center',
  },
  b1: {
    color: 'green',
  },
  scrollView: {
    backgroundColor: 'darkcyan',
    marginHorizontal: 50,
  },
});

export default Profile;
