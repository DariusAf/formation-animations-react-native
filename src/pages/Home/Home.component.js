import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';

import { Page, Modal } from 'anibamtion/src/components';

import {
  Text as AnimatableText,
  View as AnimatableView,
  Image as AnimatableImage,
} from 'react-native-animatable';

import Interactable from 'react-native-interactable';

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
  drawerComponent: any;

  static navigationOptions = {
    title: 'Résumé de ma commande',
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'rgb(249,249,249)',
    },
  };

  constructor(props) {
    super(props);
    this.drawerY = new Animated.Value(0);
  }

  state: StateType = {
    isModalVisible: false,
    finished: false,
  };

  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false, finished: !this.state.finished });

  confirmOrder = () => {
    this.refs['drawerComponent'].snapTo({ index: 0 });
    setTimeout(this.showModal, 500);
    setTimeout(this.hideModal, 2500);
  };

  render() {
    return (
      <Page noNavBar backgroundColor="rgb(249,249,249)">
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Animated.View
              style={[
                styles.textContainer,
                {
                  marginBottom: this.drawerY.interpolate({
                    inputRange: [-100, -100, 0, 0],
                    outputRange: [10, 10, 80, 80],
                  }),
                  marginTop: this.drawerY.interpolate({
                    inputRange: [-400, -400, -300, -300],
                    outputRange: [0, 0, 60, 60],
                  }),
                },
              ]}
            >
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
            </Animated.View>
            <AnimatableImage
              source={require('anibamtion/src/assets/pizza.png')}
              style={[styles.pizzaImage, this.state.finished && styles.activePizzaImage]}
              resizeMode="contain"
              duration={500}
              transition={['rotate']}
              delay={2500}
            />
          </View>
        </View>
        <Interactable.View
          ref="drawerComponent"
          style={[
            styles.drawer,
            {
              backgroundColor: this.drawerY.interpolate({
                inputRange: [-400, -400, -100, 0, 0],
                outputRange: [
                  'rgba(69,90,120,1)',
                  'rgba(69,90,120,1)',
                  'rgba(90, 180,90,1)',
                  'rgba(200,208,223,0.5)',
                  'rgba(200,208,223,0.5)',
                ],
              }),
            },
          ]}
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -100 }, { y: -400 }]}
          animatedValueY={this.drawerY}
        >
          <View style={styles.drawerIconContainer}>
            <View style={styles.drawerIcon} />
          </View>
          <Button text="Valider" onPress={this.confirmOrder} disabled={this.state.isModalVisible} />
          <Animated.Text
            style={[
              styles.drawerText,
              {
                marginTop: 30,
                opacity: this.drawerY.interpolate({
                  inputRange: [-100, -100, 0, 0],
                  outputRange: [1, 1, 0, 0],
                }),
              },
            ]}
          >
            La pizza est un aliment dangereux pour la santé. Veuillez le consommer avec modération.
          </Animated.Text>
          <Animated.Text
            style={[
              styles.drawerText,
              {
                opacity: this.drawerY.interpolate({
                  inputRange: [-300, -300, -150, -150],
                  outputRange: [1, 1, 0, 0],
                }),
              },
            ]}
          >
            Voir les conditions de vente de Super Pizza sur notre site internet. C'est un site super
            beau, on l'a fait nous-même. Bon ok on a utilisé WIX mais on a fait nous-même la
            customisation.
          </Animated.Text>
          <Animated.Text
            style={[
              styles.drawerText,
              {
                opacity: this.drawerY.interpolate({
                  inputRange: [-400, -400, -250, -250],
                  outputRange: [1, 1, 0, 0],
                }),
              },
            ]}
          >
            Vive la pizza ! La pizza c'est vraiment super quand on y réfléchit bien. Ça permet de
            faire plein de super choses.
          </Animated.Text>
        </Interactable.View>
        <Modal text="Commande validée !" visible={this.state.isModalVisible} />
      </Page>
    );
  }
}

type StateType = {
  isModalVisible: boolean,
  finished: boolean,
};
