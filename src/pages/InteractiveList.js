import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { Page, ListItem } from 'anibamtion/src/components';

export default class InteractiveList extends Component {
  static navigationOptions = {
    title: 'PANIER',
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#FAFAFA',
    },
    headerTitleStyle: {
      color: '#333',
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 2,
    },
  };

  state: StateType = {
    data: [
      { id: 0, price: 8, name: 'Pizza Margherita' },
      { id: 1, price: 10, name: 'Pizza Quatre-Fromages' },
      { id: 2, price: 13, name: 'Pizza Saucisse' },
      { id: 3, price: 3, name: 'Pizza Orientale' },
      { id: 4, price: 5, name: 'Pizza Végétarienne' },
      { id: 5, price: 8, name: 'Pizza Ananas' },
      { id: 6, price: 4, name: 'Pizza nulle' },
      { id: 7, price: 9, name: 'Pizza Roma' },
      { id: 8, price: 12, name: 'Pizza Pas Ouf' },
      { id: 9, price: 11, name: 'Pizza Tomate' },
      { id: 10, price: 18, name: 'Pizza en Or' },

    ],
  };

  renderSeparator = () => <View style={{ height: 1, backgroundColor: '#EEE' }} />;

  deleteItem = id => {
    this.setState({ data: this.state.data.filter(item => item.id !== id) });
  };

  addItem = id => {
    this.setState({ data: [...this.state.data, { id: 0, price: 8, name: 'Pizza Margherita' }] });
  };

  render() {
    console.log(this.state.data.map(item => item.id));
    return (
      <Page noNavBar noMargin backgroundColor="rgb(249,249,249)">
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <ListItem {...item} deleteCallback={this.deleteItem} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </Page>
    );
  }
}

type StateType = {
  data: any[],
};
