import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Dimensions, Animated } from 'react-native';

import { Page, ProgressBar } from 'anibamtion/src/components';

export default class ProgressBarPage extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none',
    },
  };

  state = {
    x: 0,
  };

  render() {
    return (
      <Page noNavBar noMargin backgroundColor="white">
        <View style={styles.container}>
          <ProgressBar onSelect={i => this.setState({ x: i })} />
          <Text style={styles.valueText}>{`Choix : ${this.state.x}`}</Text>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
