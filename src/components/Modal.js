// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Animation from 'lottie-react-native';
import { View as AnimatableView } from 'react-native-animatable';

import success from '../assets/animation.json';

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
    shadowRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 16,
  },
  animationWrapper: {
    flex: 1,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Modal extends Component {
  containerRef: any;
  animation: any;
  props: PropsType;
  state: StateType = {
    visible: false,
  };

  show = () =>
    this.setState({ visible: true }, () =>
      this.containerRef.fadeInDown(500).then(() => this.animation.play())
    );
  hide = () =>
    this.containerRef
      .fadeOutUp(500)
      .then(() => this.setState({ visible: false }, this.animation.reset()));

  componentWillReceiveProps(newProps: PropsType) {
    if (newProps.visible !== this.props.visible)
      if (this.props.visible) this.hide();
      else this.show();
  }

  render() {
    return (
      <AnimatableView
        style={[styles.container, !this.state.visible && { display: 'none' }]}
        ref={ref => {
          this.containerRef = ref;
        }}
      >
        <View style={styles.card}>
          <View style={styles.animationWrapper}>
            <Animation
              ref={ref => {
                this.animation = ref;
              }}
              loop={false}
              source={success}
            />
          </View>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </AnimatableView>
    );
  }
}

type PropsType = {
  text: string,
  visible: boolean,
};

type StateType = {
  visible: boolean,
};
