// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from 'anibamtion/src/pages';

export default StackNavigator(
  {
    home: {
      screen: Pages.Home,
    },
    progressBar: {
      screen: Pages.ProgressBar,
    },
    interactiveList: {
      screen: Pages.InteractiveList,
    },
    tinder: {
      screen: Pages.Tinder,
    },
    music: {
      screen: Pages.AppleMusic,
    },
  },
  {
    initialRouteName: 'music',
  }
);
