import { connect } from 'react-redux';
import get from 'lodash/get';
import SearchRepo from './SearchRepo';
import { resolveRepo } from '../../entityResolver/repo';

import { onChangeTextInputValue } from '../../actions/search';
import { login } from '../../actions/user';

const mapStateToProps = state => {
  const allEntities = get(state, 'repositories.entities', {});
  const lookupDataArray = get(state, `repositories.searchedEntitiesMap.${get(state, 'repositories.currentSearchText', '')}`, []);
  const getEntities = resolveRepo(allEntities, lookupDataArray);
  return {
    user: get(state, 'user', {}),
    currentSearchText: get(state, 'repositories.currentSearchText', ''),
    isError: get(state, 'repositories.isError', false),
    isLoading: get(state, 'repositories.isLoading', false),
    data: getEntities,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (...args) => dispatch(login(...args)),
  onChangeTextInputValue: (...args) => dispatch(onChangeTextInputValue(...args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRepo);
