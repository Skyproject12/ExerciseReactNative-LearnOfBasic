/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  state = {
    customStyles: {
      opacity: 0,
    },
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        customStyles: {
          opacity: 1,
        },
      });
    }, 1000);
  }

  myFunction() {}

  render() {
    const imageInfo = {
      uri:
        'https://img2.pngdownload.id/20180815/wk/kisspng-manchester-united-f-c-premier-league-logo-footbal-5b74d4dbeeb681.9226406815343833239778.jpg',
    };
    return (
      <>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, this.state.customStyles]}>
              Hello World
            </Text>
          </View>
          <Image style={styles.image} source={imageInfo} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
