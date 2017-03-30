/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RNNYT extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>RNNYT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 25
  }

});

AppRegistry.registerComponent('RNNYT', () => RNNYT);
