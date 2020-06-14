/* eslint-disable no-undef */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const func2 = () => {};

x = {
  func: function () {
    console.log(this);
  },
};
x.func();
func2();

class App extends Component {
  state = {
    username: '',
    password: '',
  };
  constructor() {
    super();
  }

  handleUsernameChange(newText) {
    this.setState({
      value: newText,
    });
  }

  handlePasswordChange(newText) {
    this.setState({
      value: newText,
    });
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <Text>Username</Text>
          <TextInput onChangeText={this.handleUsernameChange.bind(this)} />
          <Text>Password</Text>
          <TextInput onChangeText={this.handlePasswordChange.bind(this)} />
          <Text>You are writing {this.state.value}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default App;
