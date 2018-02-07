import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

import { Page } from 'anibamtion/src/components';
import album from 'anibamtion/src/assets/album.png';

export default class Music extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none',
    },
  };

  propz: PropsType = {
    title: 'The Poorly Drawn Guys',
    subtitle: 'Apprenez-en plus sur leur histoire',
    details:
      'Formé en 1967 par Jacques Lennon et Paul De Carné, le groupe est rapidement devenu un des plus influent de la planète avec des titres mondialement connus comme "Tout ce qu\'il vous faut c\'est de l\'amour" ou "Mon sous-marine jaune".',
  };

  render() {
    return (
      <Page noMargin backgroundColor="#eee">
        <View style={styles.container}>
          <View style={styles.drawer}>
            <View style={styles.drawerIconContainer}>
              <View style={styles.drawerIcon} />
            </View>
            <View style={styles.minimizedContainer}>
              <View style={[styles.titleContainer]}>
                <Text numberOfLines={1} style={fontStyles.title}>
                  {this.propz.title}
                </Text>
              </View>
              <Image style={{ width: 50, height: 50 }} source={album} />
            </View>
            <View style={[styles.detailsContainer]}>
              <Text style={[fontStyles.title2]}>{this.propz.title.toUpperCase()}</Text>
              <Text style={[fontStyles.subtitle]}>{this.propz.subtitle}</Text>
              <Text style={fontStyles.details}>{this.propz.details}</Text>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const drawerMinHeight = 80;
const drawerMaxHeight = winHeight / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    position: 'absolute',
    height: drawerMaxHeight,
    right: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: '#6c8aa7',
  },
  drawerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 20,
  },
  drawerIcon: {
    width: 30,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  minimizedContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    position: 'absolute',
    height: 50,
    marginLeft: 70,
    left: 0,
    justifyContent: 'center',
  },
  detailsContainer: {
    marginTop: 20,
  },
});

const fontStyles = StyleSheet.create({
  title: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent',
  },
  title2: {
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 18,
    letterSpacing: 2,
    color: 'white',
    backgroundColor: 'transparent',
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  details: {
    fontFamily: 'Avenir',
    textAlign: 'justify',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
});

type PropsType = {
  title: string,
  subtitle: string,
  details: string,
};
