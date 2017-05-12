/**
 * @providesModule native-libs
 * @type {Object}
 */


/**
 *
 * Simple wrapper over third party libs.
 */
const libs = {
  get SearchBar() { return require('react-native-search-bar'); },
};

module.exports = libs;
