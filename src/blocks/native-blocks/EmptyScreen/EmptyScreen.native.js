import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { isEmpty as _isEmpty } from 'lodash';
import styles from './EmptyScreen.style';

export default class EmptyScreen extends Component {

  render() {
    const { title, description } = this.props;
    return (
      <View style={styles.container}>
        {this.renderTitle(title)}
        {this.renderDescription(description)}
      </View>
    );
  }

  renderTitle(title) {
    if (_isEmpty(title)) {
      return null;
    }
    return (
      <Text style={styles.heading}>{title}</Text>
    );
  }

  renderDescription(description) {
    if (_isEmpty(description)) {
      return null;
    }
    return (
      <Text style={styles.content}>{description}</Text>
    );
  }
}


EmptyScreen.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

module.exports = EmptyScreen;
