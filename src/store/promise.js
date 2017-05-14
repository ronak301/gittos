import promise from 'redux-promise-middleware';

export default promise({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
});
