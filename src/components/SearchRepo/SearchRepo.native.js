import React, { PropTypes, Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from 'native-blocks';
import { get as _get } from 'lodash';
import fixtures from '../../fixtures';
import styles from './SearchRepo.style';

class SearchRepo extends Component {

  //static navigationOptions = {
  //  headerRight: <View></View>
  //};

  constructor(props) {
    super(props)
    this.state = {
      //searchText: ''
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        {this.renderSearchBar()}
        {this.renderRepositoriesList()}
      </View>
    );
  }

  renderSearchBar() {
    const { currentSearchText } = this.props;
    return (
      <SearchBar
        onChangeText={this.onChangeText}
        value={currentSearchText}
      />
    );
  }

  renderRepositoriesList = () => {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={fixtures.items}
        keyExtractor={this._keyExtractor}
      />
    );
  }

  renderItem = ({item}) => {
    const imageSource = _get(item, 'owner.avatar_url')
    const repoName = _get(item, 'name', '')
    const ownerName = _get(item, 'owner.login')
    const starCount = _get(item, 'stargazers_count')
    const createdAt = _get(item, 'created_at')
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <View style={styles.profileImageContainer}><Image source={{uri: imageSource}} style={styles.profileImage} /></View>
          <View style={styles.contentContainer}>
            <Text style={styles.repoName} numberOfLines={1}>{repoName}</Text>
            <Text style={styles.ownerName} numberOfLines={1}>{ownerName}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.starCount} numberOfLines={1}>{starCount}</Text>
              <Text style={styles.createdAt} numberOfLines={1}>{`created at: ${createdAt.substr(0,10)}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _keyExtractor = (item, index) => item.id;

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
