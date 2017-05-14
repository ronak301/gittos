import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SearchRepo from '../components/SearchRepo';
import ClosableWebView from '../blocks/native-blocks/ClosableWebView';

export const AppNavigator = StackNavigator({
  Main: {
    screen: SearchRepo,

  },
  ClosableWebView: {
    screen: ClosableWebView,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(50,50,50)',
      },
      title: 'Login',
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
}, {
  headerMode: 'screen',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
