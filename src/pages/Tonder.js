import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';

import { Page, CardItem } from 'anibamtion/src/components';

import img1 from 'anibamtion/src/assets/p1.png';
import img2 from 'anibamtion/src/assets/p2.png';
import img3 from 'anibamtion/src/assets/p3.png';
import img4 from 'anibamtion/src/assets/p4.png';

import tonderLogo from 'anibamtion/src/assets/tonder.png';

export default class Tonder extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none',
    },
  };

  state: StateType = {
    data: [
      {
        name: 'Jean-michel Parisienne',
        img: img4,
        description: "Si tu n'aimes pas les expo et les films suédois sous-titrés en coréen, passe ton chemin.\n\nÉtudie à science-po.",
      },
      {
        name: 'Jean-michel Tuning',
        img: img3,
        description:
          'Je collectionne les voitures de courses qui roulent vite. Je pratique ainsi le tuning sur mes bolides.\n\nJe pousse de la fonte trois fois par semaine.',
      },
      {
        name: 'Jean-michel Guitare',
        img: img2,
        description:
          'Guitariste. \n\nJe veux mettre à mal la société de consommation. Tous contre cet empire capitaliste.\n\nChercher stack-lineuse.',
      },
      {
        name: 'Jean-michel Forêt',
        img: img1,
        description:
          "Bjr, j'aime beaucoup la nature et je recherche qqn pour m'accompagner pour mes ballades dans la nature.\n\nAussi je fais de la parmaculture.\n\nStp swipe right.",
      },
    ],
  };

  deleteItem = name => {
    console.log('delete', name);
    this.setState({ data: this.state.data.filter(item => item.name !== name) });
  };

  addItem = () => {
    this.setState({
      data: [
        { name: 'Jean Bon', img: 'p1.png', description: "J'aime surtout manger." },
        ...this.state.data,
      ],
    });
  };

  render() {
    return (
      <Page noNavBar noMargin backgroundColor="white">
        <View style={styles.header}>
          <Image style={styles.logo} source={tonderLogo} resizeMode="contain" />
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <CardItem {...item} deleteCallback={this.deleteItem} />}
          keyExtractor={item => item.name}
          scrollEnabled={false}
        />
      </Page>
    );
  }
}

type StateType = {
  data: any[],
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
