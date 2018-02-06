import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Animated, Dimensions } from 'react-native';
import Interactable from 'react-native-interactable';

import { Page, ProgressBar } from 'anibamtion/src/components';

import album from 'anibamtion/src/assets/album.png';

export default class ProgressBarPage extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none',
    },
  };

  state = {
    y: new Animated.Value(0),
  };

  render() {
    return (
      <Page noMargin backgroundColor="#eee">
        <View style={styles.container}>
          <Interactable.View
            style={[styles.drawer]}
            verticalOnly={true}
            snapPoints={[
              { y: 0, tension: 450, damping: 0.45 },
              { y: maxdY, tension: 450, damping: 0.45 },
            ]}
            boundaries={{ top: maxdY }}
            animatedValueY={this.state.y}
          >
            <View style={styles.drawerIconContainer}>
              <View style={styles.drawerIcon} />
            </View>
            <View style={styles.minimizedContainer}>
              <Animated.View
                style={[
                  styles.titleContainer,
                  {
                    opacity: this.state.y.interpolate({
                      inputRange: [maxdY, maxdY, 0, 0],
                      outputRange: [0, 0, 1, 1],
                    }),
                    left: this.state.y.interpolate({
                      inputRange: [maxdY, maxdY, 0, 0],
                      outputRange: [300, 300, 0, 0],
                    }),
                    transform: [
                      {
                        rotate: this.state.y.interpolate({
                          inputRange: [maxdY, maxdY, 0, 0],
                          outputRange: ['45deg', '45deg', '0deg', '0deg'],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <Text numberOfLines={1} style={styles.title}>
                  The Poorly Drawn Guys
                </Text>
              </Animated.View>
              <Animated.Image
                style={{
                  width: this.state.y.interpolate({
                    inputRange: [maxdY, maxdY, 0, 0],
                    outputRange: [maxImgSize, maxImgSize, 50, 50],
                  }),
                  height: this.state.y.interpolate({
                    inputRange: [maxdY, maxdY, 0, 0],
                    outputRange: [maxImgSize, maxImgSize, 50, 50],
                  }),
                  marginTop: this.state.y.interpolate({
                    inputRange: [maxdY, maxdY, 0, 0],
                    outputRange: [15, 15, 0, 0],
                  }),
                  transform: [
                    {
                      rotate: this.state.y.interpolate({
                        inputRange: [maxdY, maxdY, maxdY / 2, 0, 0],
                        outputRange: ['0deg', '0deg', '-10deg', '0deg', '0deg'],
                      }),
                    },
                  ],
                }}
                source={album}
              />
            </View>
            <Animated.View
              style={[
                styles.detailsContainer,
                {
                  top: this.state.y.interpolate({
                    inputRange: [maxdY, maxdY, 0, 0],
                    outputRange: [0, 0, 200, 200],
                  }),
                  opacity: this.state.y.interpolate({
                    inputRange: [maxdY, maxdY, 0, 0],
                    outputRange: [1, 1, 0, 0],
                  }),
                },
              ]}
            >
              <Animated.Text
                style={[
                  styles.title2,
                  {
                    top: this.state.y.interpolate({
                      inputRange: [maxdY, maxdY, 0, 0],
                      outputRange: [0, 0, -100, -100],
                    }),
                    left: this.state.y.interpolate({
                      inputRange: [maxdY, maxdY, 0, 0],
                      outputRange: [0, 0, 200, 200],
                    }),
                    transform: [
                      {
                        rotate: this.state.y.interpolate({
                          inputRange: [maxdY, maxdY, 0, 0],
                          outputRange: ['0deg', '0deg', '-45deg', '-45deg'],
                        }),
                      },
                    ],
                  },
                ]}
              >
                THE POORLY DRAWN GUYS
              </Animated.Text>
              <Animated.Text
                style={[
                  styles.subtitle,
                  {
                    left: this.state.y.interpolate({
                      inputRange: [maxdY, maxdY, 0, 0],
                      outputRange: [0, 0, 100, 100],
                    }),
                    transform: [
                      {
                        rotate: this.state.y.interpolate({
                          inputRange: [maxdY, maxdY, 0, 0],
                          outputRange: ['0deg', '0deg', '-25deg', '-25deg'],
                        }),
                      },
                    ],
                  },
                ]}
              >
                Apprenez-en plus sur leur histoire
              </Animated.Text>
              <Text style={styles.corps}>
                Formé en 1967 par Jacques Lennon et Paul De Carné, le groupe est rapidement devenu
                un des plus influent de la planète avec des titres mondialement connus comme "Tout
                ce qu'il vous faut c'est de l'amour" ou "Mon sous-marine jaune".
              </Text>
            </Animated.View>
          </Interactable.View>
        </View>
      </Page>
    );
  }
}

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const infoViewHeight = 80;
const maxdY = -winHeight + infoViewHeight + 20;
const maxImgSize = winWidth - 2 * 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    position: 'absolute',
    height: winHeight,
    right: 0,
    left: 0,
    bottom: infoViewHeight - winHeight,
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
    height: 5,
    width: 30,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  minimizedContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    height: 50,
    justifyContent: 'center',
    marginLeft: 70,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
  },
  title2: {
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: '400',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '800',
    color: 'white',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  corps: {
    fontSize: 14,
    fontFamily: 'Avenir',
    textAlign: 'justify',
    backgroundColor: 'transparent',
  },
  detailsContainer: {
    marginTop: 20,
  },
});
