import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'native-blocks';


class SearchRepo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //searchText: ''
    }
  }

  render() {
    const { currentSearchText } = this.props;
    console.log("ttt", currentSearchText)
    return (
      <View>
        <SearchBar
          onChangeText={this.onChangeText}
          value={currentSearchText}
        />
      </View>
    );
  }

  onChangeText = (text) => {
    const { onChangeTextInputValue } = this.props;
    onChangeTextInputValue && onChangeTextInputValue(text);
  }
}

SearchRepo.propTypes = {
  currentSearchText: PropTypes.string,
  onChangeTextInputValue: PropTypes.func
}

export default SearchRepo;
