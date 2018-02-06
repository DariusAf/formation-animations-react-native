// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from 'anibamtion/src/pages';

export default StackNavigator(
  {
    home: {
      screen: Pages.Home,
    },
    interactiveList: {
      screen: Pages.InteractiveList,
    },
    tinder: {
      screen: Pages.Tinder,
    },
    progressBar: {
      screen: Pages.ProgressBar,
    },
    youtube: {
      screen: Pages.Youtube,
    },
  },
  {
    initialRouteName: 'youtube',
  }
);
