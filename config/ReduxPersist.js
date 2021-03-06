

//import { AsyncStorage } from '@callstack/async-storage';   // this is causing error : https://github.com/callstack-io/async-storage/issues/2

var localForage = require('localforage');

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '4',
  storeConfig: {
    storage: localForage,
    blacklist: ['nav']
  }
}

module.exports = REDUX_PERSIST
