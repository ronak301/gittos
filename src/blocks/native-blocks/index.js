/**
 * @providesModule native-blocks
 * @type {{SearchBar}}
 */

const nativeBlocks = {
  get SearchBar() { return require('./SearchBar'); },
  get ListView() { return require('./ListView'); },
  get EmptyScreen() { return require('./EmptyScreen'); },
}

module.exports = nativeBlocks
