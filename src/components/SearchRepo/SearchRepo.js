import React, { Component, PropTypes } from 'react';
import { get as _get, debounce as _debounce, map as _map, isEmpty as _isEmpty } from 'lodash';
import ReactTable from 'react-table';
import { getImageSource, getRepoName, getOwnerName, getStarCount, getCreatedAt, getId } from '../../entityReader/repo';
import { getFirstName, isUserLoggedIn } from '../../entityReader/user';
import { getLoginUrl, doItemBelongsToCurrentUser } from '../../utils/user';
import 'react-table/react-table.css';
import url from 'url';
import { getAuthToken, getUser } from '../../api/user';

import './SearchRepo.css'

class SearchRepo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isUserLoggedIn: isUserLoggedIn(props.user)
    }
    window.addEventListener("hashchange", this.doLoginStuff );
  }

  componentDidMount() {
    this.doLoginStuff()
  }

  componentWillReceiveProps(nextProps) {
    if (_isEmpty(this.props.user) && nextProps.user) {
      this.setState({
        isUserLoggedIn: isUserLoggedIn(nextProps.user)
      })
    }
    this.doLoginStuff()
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange");
  }

 render() {
   return (
     <div className="top-ctn">
       {this.renderHeader()}
       {this.renderTable()}
     </div>
   )
 }

  renderHeader = () => {
    return (
      <div className="header-ctn">
        Gittos
      </div>
    );
  }

  renderSearchInput = () => {
    return (
      <div className="search-ctn">
        <label>
          Search :
          <input className="search-input" type="text" name="search" onChange={this.handleInputChange}/>
        </label>
      </div>
    );
  }



  renderTable = () => {
    const { data } = this.props;
    const updatedData = _map( data, item => {
      const repoName = getRepoName( item );
      const ownerName = getOwnerName( item );
      const starCount = getStarCount( item );
      const createdAt = getCreatedAt( item );
      const id = getId( item );
      return {
        id: id,
        title: repoName,
        owner: ownerName,
        stars: starCount,
        createdAt: createdAt
      }
    } )

    const columns = this.getColumns()

    return (
      <div className="table-ctn">
        <div className="table-header">
          {this.renderSearchInput()}
          {this.renderLoginButton()}
        </div>
        <div style={{ position: 'relative'}}>
          {this.renderLoader()}
          <ReactTable
            data={updatedData}
            columns={columns}
            pageSizeOptions={[5, 10, 15, 20]}
            defaultPageSize={5}
            sortable={true}
            resizable={true}
          />
        </div>
      </div>
    )
  }

  renderLoader = () => {
    const { isLoading } = this.props;
    if(!isLoading) {
      return null;
    }
    return (
      <div className="spinner-backdrop"><img src={require('../../assets/spinner.gif')} className="spinner"/></div>
    );
  }

  renderLoginButton = () => {
    const { user } = this.props;
    if(!_isEmpty(user)) {
      return (
        <div>
          <div className="login-button">{`Hi, ${getFirstName(user)}`}</div>
        </div>
      );
    }
    return (
      <div>
        <div className="login-button" onClick={this.onPressLogin}>Log in with GitHub</div>
      </div>
    );
  }

  onPressLogin = () => {
    if(this.state.isUserLoggedIn) {
      return ;
    }
    window.location.replace(getLoginUrl())
  }

  doLoginStuff = () => {
    const that = this;
    const { saveUser } = this.props;
    const currentURL = window.location.href;
    const parsedUrl = url.parse(currentURL, true);
    const code = parsedUrl.query.code;
    if(!code) {
      return ;
    }
    this.props.login(code)
  }

  handleInputChange = (event) => {
    event.persist();
    this.handleChange(event);
  }

  handleChange = _debounce( (event) => {
    const text = _get(event, 'target.value')
    if(text === '') {
      return ;
    }
    const { onChangeTextInputValue } = this.props;
    onChangeTextInputValue && onChangeTextInputValue(text);
  }, 300)

  getColumns = () => {
    return [
      {
        Header: 'Id',
        accessor: 'id' // String-based value accessors!
      },
      {
        Header: 'Repo Title',
        accessor: 'title'
      },
      {
        Header: 'owner',
        accessor: 'owner'
      },
      {
        Header: 'Stars',
        accessor: 'stars'
      },
      {
        Header: 'createdAt',
        accessor: 'createdAt'
      }
    ]
  }
};

SearchRepo.propTypes = {
  user: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  currentSearchText: PropTypes.string,
  onChangeTextInputValue: PropTypes.func,
  login: PropTypes.func
}

module.exports = SearchRepo;
