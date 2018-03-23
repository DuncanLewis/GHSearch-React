import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataIcon from '../../components/dataicon';

export class RepoList extends Component {
  /*
   * renderResults
   * returns a list of search results in order of stargazers count descending
   */
  renderResults() {
    // Use lodash _.orderBy to reorder our data before we output it
    let repoList = this.props.data;
    repoList = _.orderBy(this.props.data, ['stargazers_count'], ['desc']);

    // Use lodash map (rather than for loop) to return an item for each search result
    return _.map(repoList, repo => (
      <div className="search-item card mb-3">
        <Link
          to={`/repo/${repo.full_name}`}
          key={repo.id} // We have to use key prop with a unique ID (equal to the repo ID from GH)
        />
        <div className="card-body bg-light">
          <h5 className="card-title repo-name">{repo.full_name}</h5>
          <span className="repo-language badge badge-primary">{repo.language}</span>
          <p className="card-text">{repo.description}</p>
          <span className="mr-3">
            <DataIcon
              icon="star"
              count={repo.stargazers_count}
              toK
            />
          </span>
          <span>
            <DataIcon
              icon="code-branch"
              count={repo.forks_count}
              toK
            />
          </span>
        </div>
      </div>
    ));
  }

  render() {
    if (!this.props.data) {
      return <p className="search-help-text text-center lead">Enter a repo name to get started</p>;
    }

    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="search-results">
            { this.renderResults() }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.github };
}

export default connect(mapStateToProps)(RepoList);
