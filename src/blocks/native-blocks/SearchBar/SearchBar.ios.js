import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'native-libs';

class SearchBarBlock extends Component {
  render() {
    const { onChangeText } = this.props;
    return (
        <SearchBar
          ref="searchBarBlock"
          onChangeText={onChangeText}
          placeholder="Search"
          enablesReturnKeyAutomatically
          {...this.props}
        />
    );
  }
}

SearchBarBlock.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

module.exports = SearchBarBlock;
