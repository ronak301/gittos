import React, { PropTypes, Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SearchBar, EmptyScreen } from 'native-blocks';
import { get as _get, isEmpty as _isEmpty, debounce as _debounce, noop as _noop } from 'lodash';
import { getFirstName } from '../../entityReader/user';
import { getLoginUrl } from '../../utils/user';
import styles from './SearchRepo.style';

class SearchRepo extends Component {

  static navigationOptions = ({ navigation }) =>  {

    const {state, setParams} = navigation;
    const { navigate } = navigation
    const rightMenu = state.params && state.params.rightButton ? state.params.rightButton : 'Login'
    return {
      headerRight: (
        <TouchableOpacity onPress={() => { navigate('ClosableWebView', { url: getLoginUrl() }) }}><View><Text style={styles.loginText}>{rightMenu}</Text></View></TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      //searchText: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (_isEmpty(this.props.user) && nextProps.user) {
      this.props.navigation.setParams({
        rightButton: `Hi, ${getFirstName(nextProps.user)}`,
      });
    }
  }

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
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
    const imageSource = _get(item, 'owner.avatar_url')
    const repoName = _get(item, 'name', '')
    const ownerName = _get(item, 'owner.login')
    const starCount = _get(item, 'stargazers_count')
    const createdAt = _get(item, 'created_at')
    return (
      <TouchableOpacity>
        <View style={styles.row}>
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
