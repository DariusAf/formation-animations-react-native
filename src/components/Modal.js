// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  card: {
    width: 250,
    height: 250,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0,height: 5}
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 16,
  }
});

export default (props: PropsType) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </View>
);

type PropsType = {
  text: string,
  visible: boolean,
};
