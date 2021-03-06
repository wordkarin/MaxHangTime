import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const moment = require('moment');

class Clock extends Component {

  render() {
    const display = this.props.display;
    return (
        <Text style={styles.clock}>
          {display}
        </Text>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clock: {
    textAlign: 'center',
    color: 'white',
    fontSize: 60,
    fontFamily: 'Heiti SC',
    fontWeight: '500'
  }
});
module.exports = Clock;
