import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

console.disableYellowBox = true;

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';


const store = configureStore();


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
module.exports = App;
