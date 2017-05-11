import { connect } from 'react-redux';
import get from 'lodash/get';
import SearchRepo from './SearchRepo';

import { onChangeTextInputValue } from '../../actions/search';

const mapStateToProps = state => ({ currentSearchText: get(state, 'repositories.currentSearchText', '') });

const mapDispatchToProps = (dispatch) => ({
  onChangeTextInputValue : (...args) => dispatch(onChangeTextInputValue(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRepo);
