import React, { PropTypes, Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SearchBar, EmptyScreen } from 'native-blocks';
import { get as _get, isEmpty as _isEmpty, debounce as _debounce, noop as _noop } from 'lodash';
import { getFirstName, isUserLoggedIn } from '../../entityReader/user';
import { getLoginUrl, doItemBelongsToCurrentUser } from '../../utils/user';
import { getImageSource, getRepoName, getOwnerName, getStarCount, getCreatedAt } from '../../entityReader/repo';
import styles from './SearchRepo.style';

class SearchRepo extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      isUserLoggedIn: isUserLoggedIn(props.user)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (_isEmpty(this.props.user) && nextProps.user) {
      this.setState({
        isUserLoggedIn: isUserLoggedIn(nextProps.user)
      })
    }
  }

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {this.renderSearchBar()}
        {this.renderRepositoriesList()}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <View style={styles.leftView}></View>
        {this.renderTitle()}
        {this.renderRightButton()}
      </View>
    );
  }

  renderTitle = () => {
    return (
      <View style={styles.centerView}><Text style={styles.title}>{'Repositories'}</Text></View>
    );
  }

  renderRightButton = () => {
    const { user }  = this.props;
    const rightButtonText = this.state.isUserLoggedIn ? `Hi, ${getFirstName(user)}` : 'Login';
    return (
      <View style={styles.rightView}><TouchableOpacity onPress={this.onPressRightButton}><View><Text numberOfLines={1} style={styles.loginText}>{rightButtonText}</Text></View></TouchableOpacity></View>
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
    const { data, isLoading, isError } = this.props
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}><ActivityIndicator size="small" /></View>
      );
    }
    if (_isEmpty(data) && isError === false) {
      return (
        <EmptyScreen description={'No data'}/>
      )
    }
    if (_isEmpty(data) && isError) {
      return (
        <EmptyScreen description={'Opss Something went wrong.Please try again later'}/>
      )
    }
    return (
      <FlatList
        renderItem={this.renderItem}
        data={data}
        keyExtractor={this._keyExtractor}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps="always"
      />
    );
  }

  renderItem = ({item}) => {

    const imageSource = getImageSource(item);
    const repoName = getRepoName(item);
    const ownerName = getOwnerName(item);
    const starCount = getStarCount(item);
    const createdAt = getCreatedAt(item);

    const { user } = this.props
    const highlightedStyle = doItemBelongsToCurrentUser(item, user) ? styles.highlightedStyle : {}
    return (
      <TouchableOpacity>
        <View style={[styles.row, highlightedStyle ]}>
          <View style={styles.profileImageContainer}><Image defaultSource={require('../../assets/defaultUserImage.png')} source={{uri: imageSource}} style={styles.profileImage} /></View>
          <View style={styles.contentContainer}>
            <Text style={styles.repoName} numberOfLines={1}>{repoName}</Text>
            <Text style={styles.ownerName} numberOfLines={1}>{ownerName}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.starCount} numberOfLines={1}>{`${starCount} stars`}</Text>
              <Text style={styles.createdAt} numberOfLines={1}>{`created at: ${createdAt && createdAt.substr(0,10)}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onPressRightButton = () => {
    if(this.state.isUserLoggedIn) {
      return ;
    }
    const { navigate } = this.props.navigation;
    navigate('ClosableWebView', { url: getLoginUrl() })
  }

  _keyExtractor = (item, index) => item.id;

  onChangeText = _debounce( (text) => {
    if(text === '') {
      return ;
    }
    const { onChangeTextInputValue } = this.props;
    onChangeTextInputValue && onChangeTextInputValue(text);
  }, 300)
}

SearchRepo.propTypes = {
  user: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  currentSearchText: PropTypes.string,
  onChangeTextInputValue: PropTypes.func
}

export default SearchRepo;
