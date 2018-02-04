// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';

import Interactable from 'react-native-interactable';

export default class Modal extends Component {
  props: PropsType;
  state: StateType = {
    value: 1,
  };

  constructor(props: PropsType) {
    super(props);
    this.itemX = new Animated.Value(winWidth);
    this.itemY = new Animated.Value(itemHeight);
  }

  add = () => this.setState({ value: this.state.value + 1 });
  substract = () => {
    if (this.state.value === 1) this.deleteItem();
    else this.setState({ value: this.state.value - 1 });
  };
  deleteItem = () => {
    Animated.timing(this.itemY, { toValue: 0, duration: 150 }).start(() =>
      this.props.deleteCallback(this.props.id)
    );
  };
  drag = event => {
    const parsedEvent = event.nativeEvent;
    if (parsedEvent.state === 'end' && parsedEvent.targetSnapPointId === 'delete') {
      this.deleteItem();
    }
  };

  render() {
    return (
      <Animated.View
        style={[
          styles.back,
          {
            backgroundColor: this.itemX.interpolate({
              inputRange: [-optionWidth, -optionWidth, 0, 0],
              outputRange: [
                'rgba(210, 43, 54, 1)',
                'rgba(210, 43, 54, 1)',
                'rgba(50, 100, 191, 1)',
                'rgba(50, 100, 191, 1)',
              ],
            }),
            height: this.itemY,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.optionContainer,
            {
              left: this.itemX.interpolate({
                inputRange: [0, 0, optionWidth, 50 + optionWidth],
                outputRange: [0, 0, 0, 50],
              }),
            },
          ]}
        >
          <TouchableOpacity onPress={this.add} style={styles.option}>
            <Text style={styles.optionText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.substract} style={styles.option}>
            <Text style={styles.optionText}>-</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            styles.deleteContainer,
            {
              right: this.itemX.interpolate({
                inputRange: [-50 - optionWidth, -optionWidth, 0, 0],
                outputRange: [50, 0, 0, 0],
              }),
            },
          ]}
        >
          <TouchableOpacity onPress={this.deleteItem} style={styles.option}>
            <Text style={styles.deleteText}>X</Text>
          </TouchableOpacity>
        </Animated.View>
        <Interactable.View
          style={styles.container}
          horizontalOnly={true}
          snapPoints={[
            { x: 0, damping: 0.5, tension: 1000 },
            { x: optionWidth, tension: 300 },
            { x: -optionWidth, tension: 300 },
            { x: -winWidth + optionWidth, tension: 600, id: 'delete' },
          ]}
          animatedValueX={this.itemX}
          onDrag={this.drag}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              <Text>{`${this.state.value} x `}</Text>
              <Text style={styles.bold}>{`${this.props.name}`}</Text>
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{`${this.state.value * this.props.price}€`}</Text>
          </View>
        </Interactable.View>
      </Animated.View>
    );
  }
}

type PropsType = {
  price: number,
  name: string,
  deleteCallback: id => void,
};

type StateType = {
  value: number,
};

const winWidth = Dimensions.get('window').width;
const itemHeight = 100;
const optionWidth = 80;

const styles = StyleSheet.create({
  back: {
    height: itemHeight,
    backgroundColor: '#bf2b36',
    overflow: 'hidden',
  },
  optionContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: optionWidth,
    height: itemHeight,
    flexDirection: 'column',
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  deleteContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: optionWidth,
    height: itemHeight,
  },
  deleteText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  container: {
    flexDirection: 'row',
    height: itemHeight,
    backgroundColor: '#FFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  priceContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
