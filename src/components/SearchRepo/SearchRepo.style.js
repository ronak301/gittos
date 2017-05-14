import { StyleSheet, PixelRatio, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  highlightedStyle: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  profileImageContainer: {
    marginHorizontal: 15,
    paddingVertical: 15,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: 'rgba(29,29,29,0.2)',
    paddingTop: 15,
    paddingBottom: 10,
    paddingRight: 10,
  },
  repoName: {
    flexShrink: 1,
    fontWeight: '500',
    color: 'rgb(77,140,203)',
    paddingBottom: 3,
    fontSize: 16,
  },
  ownerName: {
    flexShrink: 1,
    fontWeight: '400',
    color: 'rgb(89,94,98)',
    paddingBottom: 5,
  },
  bottomRow: {
    flexDirection: 'row',
  },
  starCount: {
    fontSize: 12,
    color: '#939393',
  },
  createdAt: {
    fontSize: 12,
    color: '#939393',
    marginLeft: 30,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    padding: 10,
  },
  toolbar: {
    height: 64,
    width: window.width,
    backgroundColor: 'rgb(50,50,50)',
    alignItems: 'center',
    paddingTop: 15,
    flexDirection: 'row',
  },
  leftView: {
    flex: 1,
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
  },
  rightView: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});
