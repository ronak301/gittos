import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    elevation: 2,
  },
  searchBarContainer: {
    height: 50,
  },
  searchBoxAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchInput: {
    borderRadius: 5,
    borderColor: 'rgba(29,29,29,0.2)',
    borderWidth: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchInputAndroid: {
    flex: 1
  },
});
