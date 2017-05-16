import React, { PropTypes } from 'react';
import { View, TextInput } from 'react-native';

import styles from './SearchBar.style';

const SearchBar = (props) => {
  const { onChangeText, onSearchButtonPress, onClose, showBackButton } = props;
  return (
    <View style={[styles.searchContainer]}>
      <View style={styles.searchBoxAndroid}>
        {showBackButton && <Button underlayColor="transparent" onPress={onClose} style={styles.backButtonStyle}><Icon name="back-icon" color="#323e48" size={15} /></Button>}
        <TextInput placeholder="Search here" onChangeText={onChangeText} style={styles.searchInputAndroid} returnKeyType="search" onSubmitEditing={onSearchButtonPress} />
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  customStyles: PropTypes.object,
  onChangeText: PropTypes.func.isRequired,
  onSearchButtonPress: PropTypes.func,
  onClose: PropTypes.func,
  showBackButton: PropTypes.bool,
};

SearchBar.deafultProps = {
  customStyles: {},
  showBackButton: false,
};

module.exports = SearchBar;
