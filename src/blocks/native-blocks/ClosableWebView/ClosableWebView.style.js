import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
    width,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBarIcon: {
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  closeText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    padding: 10
  }
});
