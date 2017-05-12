import { connect } from 'react-redux';
import get from 'lodash/get';
import SearchRepo from './SearchRepo';

import { onChangeTextInputValue } from '../../actions/search';

const mapStateToProps = state => ({
  currentSearchText: get(state, 'repositories.currentSearchText', ''),
  isError: get(state, 'repositories.isError', false),
  isLoading: get(state, 'repositories.isLoading', false),
  data: get(state, 'repositories.data', []),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTextInputValue : (...args) => dispatch(onChangeTextInputValue(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRepo);
