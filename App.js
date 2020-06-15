/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

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
  constructor() {
    super();
    this.buttonPressed = this.buttonPressed.bind(this);
    this.password = React.createRef();
  }
  state = {
    username: null,
    password: null,
  }

  buttonPressed() {
    console.log('hasil', this.state.password);
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <Text>Username</Text>
          <TextInput
            defaultValue={this.state.username}
            onChangeText={text => this.setState({username: text})} />
          <Text>Password</Text>
          <TextInput
            defaultValue={this.state.password}
            onChangeText={text=>this.setState({password: text})}/>
          <Button title={'Hello'} onPress={this.buttonPressed} />
          <Text>You are writing {this.state.username}</Text>
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
