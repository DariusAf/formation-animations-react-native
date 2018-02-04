// @flow

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Interactable from 'react-native-interactable';

export default class Modal extends Component {
  props: PropsType;
  state: StateType;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      width: new Animated.Value(0),
      cardX: new Animated.Value(0),
      isFullscren: false,
    };
  }

  snap = event => {
    const parsedEvent = event.nativeEvent;
    if (parsedEvent.targetSnapPointId === 'delete') setTimeout(() => this.deleteItem(), 1000);
    if (parsedEvent.targetSnapPointId === 'like') setTimeout(() => this.deleteItem(), 1000);
  };

  deleteItem = () => {
    this.props.deleteCallback(this.props.name);
  };

  pressImage = () => {
    if (!this.state.isFullscreen)
      Animated.timing(this.state.width, { toValue: 1, duration: 200 }).start(() =>
        this.setState({ isFullscreen: true })
      );
    if (this.state.isFullscreen)
      Animated.timing(this.state.width, { toValue: 0, duration: 200 }).start(() =>
        this.setState({ isFullscreen: false })
      );
  };

  render() {
    return (
      <Interactable.View
        style={styles.container}
        snapPoints={[{ x: 0, id: 'default' }, { x: -350, id: 'delete' }, { x: 350, id: 'like' }]}
        onDrag={this.snap}
        dragEnabled={!this.state.isFullscreen}
        animatedValueX={this.state.cardX}
      >
        <Animated.View
          style={[
            styles.wrapper,
            {
              width: this.state.width.interpolate({
                inputRange: [0, 0, 1, 1],
                outputRange: [itemSize, itemSize, winWidth, winWidth],
              }),
              top: this.state.width.interpolate({
                inputRange: [0, 0, 1, 1],
                outputRange: [itemMargin, itemMargin, 0, 0],
              }),
              height: this.state.width.interpolate({
                inputRange: [0, 0, 1, 1],
                outputRange: [
                  itemSize + itemTextSize,
                  itemSize + itemTextSize,
                  winHeight - 100,
                  winHeight - 100,
                ],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              styles.imgContainer,
              {
                backgroundColor: this.state.cardX.interpolate({
                  inputRange: [-100, -100, 0, 100, 100],
                  outputRange: [
                    'rgba(200,50,0,1)',
                    'rgba(200,50,0,1)',
                    'rgba(255,255,255,1)',
                    'rgba(0,255,100,1)',
                    'rgba(0,255,100,1)',
                  ],
                }),
              },
            ]}
          >
            <TouchableOpacity
              onPress={this.pressImage}
              activeOpacity={1}
              style={styles.imgContainer}
            >
              <Animated.Image
                source={this.props.img}
                style={[
                  styles.img,
                  {
                    opacity: this.state.cardX.interpolate({
                      inputRange: [-200, -200, 0, 200, 200],
                      outputRange: [0.3, 0.3, 1, 0.3, 0.3],
                    }),
                  },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              styles.textContainer,
              {
                height: this.state.width.interpolate({
                  inputRange: [0, 0, 1, 1],
                  outputRange: [itemTextSize, itemTextSize, deployedTextSize, deployedTextSize],
                }),
              },
            ]}
          >
            <Text style={styles.name}>{this.props.name}</Text>
            <Animated.View style={[styles.descriptionContainer, { opacity: this.state.width }]}>
              <Text style={styles.description}>{this.props.description}</Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </Interactable.View>
    );
  }
}

type PropsType = {
  name: string,
  description: string,
  img: string,
  deleteCallback: id => void,
};

type StateType = {
  width: number,
  cardX: number,
  isFullscreen: boolean,
};

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const itemSize = 300;
const itemTextSize = 50;
const deployedTextSize = 200;
const itemMargin = 30;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: itemSize + itemTextSize + 2 * itemMargin,
    width: winWidth,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapper: {
    height: itemSize + itemTextSize,
    borderRadius: 4,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    backgroundColor: 'white',
  },
  imgContainer: {
    flex: 1,
  },
  img: {
    flex: 1,
    width: 'auto',
  },
  textContainer: {
    paddingTop: 15,
    height: itemTextSize,
    overflow: 'hidden',
  },
  name: {
    color: '#444',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    fontSize: 18,
  },
  descriptionContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    width: winWidth,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  description: {
    textAlign: 'justify',
    color: '#666',
    fontSize: 14,
  },
});
