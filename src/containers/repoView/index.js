import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { fetchRepo } from '../../actions';
import DataIcon from '../../components/dataicon';
import StatCard from '../../components/statCard';

class RepoView extends Component {
  componentDidMount() {
    const { owner, name } = this.props.match.params;
    this.props.fetchRepo(owner, name);
  }

  renderReadme(readme) {
    return btoa(readme);
  }

  /*
   * renderContributors()
   * render each top contributor in the list item as a link, with avatar and total contributions
   *
  */
  renderContributors() {
    return _.map(this.props.data.contributors, contributor => (
      <Link
        to={contributor.html_url}
        key={contributor.id}
        target="_blank"
        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center media"
      >
        <div>
          <img className="align-self-center mr-2 rounded-circle" src={contributor.avatar_url} width="32" height="32" />
          {contributor.login}
        </div>
        <span className="badge badge-primary badge-pill">{contributor.contributions}</span>
      </Link>
    ));
  }

  /*
   * render()
   * initial render lifecycle function
   *
  */
  render() {
    // Deconstruct data from this.props for easier access
    const { data } = this.props;

    // Check if data.repo is set - if not then we are still waiting on data to be returned
    // ToDo: refactor this so it uses the state to check if still loading
    if (!data.repo) {
      return <div>Loading...</div>;
    }

    const commitData = data.commitActivity[0].days;
    const totalCommits = data.commitActivity[0].total;
    return (
      <div className="repo-view">
        <div className="row justify-content-between mb-3">
          <div className="col-4">
            <h3>{data.repo.full_name}</h3>
          </div>
          <div className="col-4">
            {/*
              Use our DataIcon component to show the stargazers
              count (specify toK to convert to thousands)
            */}
            <DataIcon
              count={data.repo.stargazers_count}
              icon="star"
              toK
            />
            <DataIcon
              count={data.repo.forks_count}
              icon="code-branch"
              toK
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.repo.open_issues_count} />
          </div>

          <div className="col-3">
            <StatCard statName="Commits This Week" statCount={totalCommits} />
          </div>

          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.repo.open_issues_count} />
          </div>

          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.repo.open_issues_count} />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Top Contributors</h5>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderContributors()}
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Weekly Commits</h5>
              </div>
              <Sparklines data={commitData}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ github }, props) {
  // Full name is how we structure the URL and how github expects
  // these requests to come into the API
  const fullName = `${props.match.params.owner}/${props.match.params.name}`;
  return { data: github }; // Only pass the repo we are interested in
}

export default connect(mapStateToProps, { fetchRepo })(RepoView);
