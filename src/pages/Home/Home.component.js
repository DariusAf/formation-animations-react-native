import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Page } from 'anibamtion/src/components';

import styles from './Home.style';

const Button = props => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

export default class Home extends Component {
  static navigationOptions = {
    title: 'Résumé de ma commande',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'rgb(249,249,249)',
    },
  };

  render() {
    return (
      <Page backgroundColor="rgb(249,249,249)">
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Image
              source={require('anibamtion/src/assets/pizza.png')}
              style={{ width: 300, height: 200 }}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Pizza quatre-fromages</Text>
              <Text style={styles.subtitle}>Prix : 8€</Text>
            </View>
          </View>
          <Button text="Valider" />
        </View>
      </Page>
    );
  }
}
