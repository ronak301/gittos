import React, { PropTypes } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';

import styles from './SearchBar.style';

const SearchBar = (props) => {
  const { onChangeText, onSearchButtonPress, value } = props;
  return (
    <View style={[styles.searchContainer]}>
      <View style={styles.searchBoxAndroid}>
        <TextInput placeholder="Search here" onChangeText={onChangeText} value={value} style={styles.searchInputAndroid} underlineColorAndroid="transparent" returnKeyType="search" onSubmitEditing={onSearchButtonPress} />
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  customStyles: PropTypes.object,
  onChangeText: PropTypes.func.isRequired,
  onSearchButtonPress: PropTypes.func,
  value: PropTypes.string
};

SearchBar.deafultProps = {
  customStyles: {},
  showBackButton: false,
};

module.exports = SearchBar;
