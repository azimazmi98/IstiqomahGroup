import React, { Component } from 'react';
import { Text, Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import {Styles} from './Styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
    
      
      <View style={Styles.container}>
  
        <View style={Styles.container}>

        <Text style={Styles.welcome}>Welcome to Quiz Game</Text>

        </View>

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={Styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={Styles.input}
        />
        
        <Button
          title={'Login'}
          style={Styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}
