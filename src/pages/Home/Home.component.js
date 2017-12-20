import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Page, Modal } from 'anibamtion/src/components';

import {
  Text as AnimatableText,
  View as AnimatableView,
  Image as AnimatableImage,
} from 'react-native-animatable';

import styles from './Home.style';

const Button = props => (
  <TouchableOpacity
    style={[styles.button, props.disabled && { backgroundColor: '#AAA' }]}
    onPress={props.onPress}
    disabled={props.disabled}
  >
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

export default class Home extends Component {
  static navigationOptions = {
    title: 'Résumé de ma commande',
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'rgb(249,249,249)',
    },
  };

  state: StateType = {
    isModalVisible: false,
    finished: false,
  };

  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false, finished: !this.state.finished });

  confirmOrder = () => {
    this.showModal();
    setTimeout(this.hideModal, 1500);
  };

  render() {
    return (
      <Page backgroundColor="rgb(249,249,249)">
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.textContainer}>
              <AnimatableText
                style={[styles.title, this.state.finished && { color: '#51dc77' }]}
                duration={1000}
                transition={['color']}
                delay={1500}
              >
                Pizza quatre-fromages
              </AnimatableText>
              <AnimatableView
                style={[styles.bar, this.state.finished && { width: 228 }]}
                duration={500}
                transition={['width']}
                delay={1000}
              />
              <Text style={styles.subtitle}>Prix : 8€</Text>
            </View>
            <AnimatableImage
              source={require('anibamtion/src/assets/pizza.png')}
              style={[styles.pizzaImage, this.state.finished && styles.activePizzaImage]}
              resizeMode="contain"
              duration={500}
              transition={['rotate']}
              delay={3500}
            />
          </View>
          <Button text="Valider" onPress={this.confirmOrder} disabled={this.state.isModalVisible} />
        </View>
        <Modal text="Commande validée !" visible={this.state.isModalVisible} />
      </Page>
    );
  }
}

type StateType = {
  isModalVisible: boolean,
  finished: boolean,
};
