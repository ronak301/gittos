import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10
  },
  searchContainer: {
    backgroundColor: 'white',
    android: {
      elevation: 2
    }
  },
  searchBarContainer: {
    height: 30
  },
  searchBoxAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  searchInput: {
    margin: 10,
    borderRadius: 5,
    borderColor: 'rgba(29,29,29,0.2)',
    borderWidth: 1,
    height: 30,
    fontSize: 14,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  searchInputAndroid: {
    flex: 1
  },
  backButtonStyle: {
    paddingLeft: 5,
    paddingRight: 15,
    paddingVertical: 8
  }
});
