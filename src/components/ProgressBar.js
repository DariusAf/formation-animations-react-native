// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, Dimensions } from 'react-native';

import Interactable from 'react-native-interactable';

export default class Modal extends Component {
  props: PropsType;
  state: StateType;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      value: new Animated.Value(0),
      showValue: true,
      x: 0,
    };
  }

  snap = e => {
    const event = e.nativeEvent;
    this.props.onSelect(event.index);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.bar} />
          <Interactable.View
            style={styles.circle}
            horizontalOnly={true}
            snapPoints={[
              { x: 0 },
              { x: cursorCourse / 4 },
              { x: cursorCourse / 2 },
              { x: cursorCourse * 3 / 4 },
              { x: cursorCourse },
            ]}
            animatedValueX={this.state.value}
            onSnap={this.snap}
          />
        </View>
      </View>
    );
  }
}

type PropsType = {};

type StateType = {
  value: number,
  showValue: boolean,
  x: number,
};

const winWidth = Dimensions.get('window').width;
const margin = 20;
const cursorSize = 30;
const cursorCourse = winWidth - 2 * margin - cursorSize;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: margin,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 30,
  },
  circle: {
    width: cursorSize,
    height: cursorSize,
    borderRadius: cursorSize / 2,
    backgroundColor: 'black',
  },
  bar: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: cursorSize / 2,
    height: 1,
    backgroundColor: 'black',
  },
  value: {
    width: 30,
    position: 'absolute',
    top: cursorSize + 10,
    left: cursorSize / 3,
  },
  valueText: {
    fontSize: 16,
  },
});
