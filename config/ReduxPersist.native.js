

//import { AsyncStorage } from '@callstack/async-storage';   // this is causing error : https://github.com/callstack-io/async-storage/issues/2

import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '4',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['nav']
  }
}

export default REDUX_PERSIST
