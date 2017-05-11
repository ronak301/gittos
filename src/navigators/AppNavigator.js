import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SearchRepo from '../components/SearchRepo';

export const AppNavigator = StackNavigator({
  Main: { screen: SearchRepo },
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
