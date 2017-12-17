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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 5,
    backgroundColor: '#FF0',
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
    marginBottom: 40,
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
});
