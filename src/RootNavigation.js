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
    tonder: {
      screen: Pages.Tonder,
    },
    progressBar: {
      screen: Pages.ProgressBar,
    },
  },
  {
    initialRouteName: 'progressBar',
  }
);
