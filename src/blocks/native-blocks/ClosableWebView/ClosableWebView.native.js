import React, { PropTypes, Component } from 'react';
import { View, WebView, Platform, Text } from 'react-native';
import { isEmpty as _isEmpty } from 'lodash';
import { NavigationActions } from 'react-navigation';
var CookieManager = require('react-native-cookies');
import url from 'url';
import { getAuthToken, getUser } from '../../../api/user';

import styles from './ClosableWebView.style';

class ClosableWebView extends Component {

  static navigationOptions = ({ navigation }) =>  {
    return {
      headerLeft: (
        <View><Text onPress={() => navigation.goBack() } style={styles.closeText}>Close</Text></View>
      )
    }
  }

  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    onNavigationStateChange: PropTypes.func,
    onClose: PropTypes.func,
    saveUser: PropTypes.func, // via container,
    login: PropTypes.func
  };

  constructor(props) {
    super(props);
    if(Platform.OS === 'ios') {
      CookieManager.clearAll((err, res) => {
        console.log('cookies cleared!');
        console.log(err);
        console.log(res);
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderWebView()}
      </View>
    );
  }

  renderWebView = () => {
    const { url } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <WebView
          automaticallyAdjustContentInsets
          style={styles.webView}
          source={{ uri: url }}
          javaScriptEnabled
          domStorageEnabled
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState
          scalesPageToFit
        />
      </View>
    );
  };

  onNavigationStateChange = (navState) => {
    const parsedUrl = url.parse(navState.url, true);
    const { login } = this.props.navigation.state.params;
    const code = parsedUrl.query.code;
    if(code) {
      login(code)
      this.props.navigation.goBack();
    }
  };

  popScene() {
    NavigationActions.goBack();
  }
}

module.exports = ClosableWebView;
