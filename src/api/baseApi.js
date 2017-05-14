import axios from 'axios';
import url from 'url';
import { merge as _merge } from 'lodash';

import config from '../../config/environment';

function getAdvocacyUrlObj() {
  const originUrlObj = window.location ? windowManager.fetchOriginObject() : config.host;
  return originUrlObj;
}

function baseAxios(options) {
  return axios.create({
    baseURL: `https://api.github.com`,
    timeout: options.timeout || 30000
  });
}

function executeRequest(method, pathname, data, options = {}) {
  const body = method === 'get' || !data ? {} : { data };
  const reqObj = { method, url: pathname, params: options.query, ...body };

  return baseAxios(options).request(reqObj);
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options);
  },

  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options);
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options);
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },
};
