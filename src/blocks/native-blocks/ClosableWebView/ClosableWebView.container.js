import { connect } from 'react-redux';
import get from 'lodash/get';
import { saveUser } from '../../../actions/user';
import ClosableWebView from './ClosableWebView';

const mapDispatchToProps = (dispatch) => ({
  saveUser : (...args) => dispatch(saveUser(...args))
});

export default connect(
  null,
  mapDispatchToProps
)(ClosableWebView);
