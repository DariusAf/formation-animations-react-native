// @flow

import { StyleSheet } from 'react-native';
import theme from 'anibamtion/src/theme';

const mainColor = '#6c8aa7';
const secondaryColor = '#455370';

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
    color: mainColor,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
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
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
