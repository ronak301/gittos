import React, { Component, PropTypes } from 'react';
import { get as _get, debounce as _debounce } from 'lodash';

import './SearchRepo.css'


var schema = [
  { key: 'type' },
  { key: 'legs', label: 'Number of Legs' }
];

var rows = [
  { type: 'dog', legs: 4 },
  { type: 'cat', legs: 4 },
  { type: 'ant', legs: 6 }
];

class SearchRepo extends Component {

 render() {
   return (
     <div className="top-ctn">
       {this.renderSearchInput()}
       {this.renderTable()}
     </div>
   )
 }

  renderSearchInput = () => {
    return (
      <label>
        Search Github Repo:
        <input className="search-input" type="text" name="search" />
      </label>
    );
  }



  renderTable = () => {
    return (
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    );
  }

//  handleChange = _debounce( (event) => {
//    event.persist();
//    const text = _get(event, 'target.value')
//    if(text === '') {
//      return ;
//    }
//    const { onChangeTextInputValue } = this.props;
//    onChangeTextInputValue && onChangeTextInputValue(text);
//  }, 300)
};

SearchRepo.propTypes = {
  user: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  currentSearchText: PropTypes.string,
  onChangeTextInputValue: PropTypes.func
}

module.exports = SearchRepo;
