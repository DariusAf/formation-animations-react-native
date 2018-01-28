// @flow

import { StyleSheet } from 'react-native';
import theme from 'anibamtion/src/theme';

const mainColor = '#51dc77';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 5,
    color: '#333',
    padding: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    padding: 5,
  },
  price: {
    color: mainColor,
    textAlign: 'right',
  },
  textContainer: {
    marginTop: 60,
    marginBottom: 80,
  },
  button: {
    padding: 10,
    backgroundColor: mainColor,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  bar: {
    width: 0,
    height: 4,
    backgroundColor: mainColor,
    position: 'absolute',
    top: 30,
    left: 5,
  },
  pizzaImage: {
    width: 300,
    height: 200,
    transform: [
      {
        rotate: '0deg',
      },
    ],
  },
  activePizzaImage: {
    transform: [
      {
        rotate: '-30deg',
      },
    ],
  },
  drawer: {
    position: 'absolute',
    height: 700,
    right: 0,
    left: 0,
    bottom: -600,
    paddingHorizontal: 20,
    backgroundColor: '#6c8aa7',
  },
  drawerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  drawerIcon: {
    height: 5,
    width: 30,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  drawerText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Avenir'
  }
});
