import React, { Component, PropTypes } from 'react';
import { get as _get, debounce as _debounce } from 'lodash';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }]

      return (
        <ReactTable
          data={data}
          columns={columns}
        />
      )
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
