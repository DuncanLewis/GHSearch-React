import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRepos } from '../../actions';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      page: 1,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Now carry out the search with GH API
    this.props.dispatch(searchRepos(this.state.term, this.state.page));
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
      >
        <input
          className="search-input form-control form-control-lg mb-4"
          placeholder="Search for a repo"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchRepos }, dispatch);
}

export default connect()(Search);
