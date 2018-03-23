import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepo } from '../../actions';
import DataIcon from '../../components/dataicon';
import StatCard from '../../components/statCard';
import CommitCard from '../../components/commitCard';
import ContributorsCard from "../../components/contributorsCard";

class RepoView extends Component {
  componentDidMount() {
    const { owner, name } = this.props.match.params;
    this.props.fetchRepo(owner, name);
  }

  /*
   * renderReadme()
   * renders the readme file with markdown from GitHub API
   * ToDo: figure out how to insert this into HTML
   */
  renderReadme(readme) {
    return (
      <div className="readme-content">{readme}</div>
    );
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

    // Assign data to more friendly constants
    const commitData = data.commitActivity[0].days;
    const totalCommits = data.commitActivity[0].total;
    const openPullRequests = data.pulls.length;
    return (
      <div className="repo-view">
        <div className="row justify-content-between mb-3">
          <div className="col-4">
            <h3>{data.repo.full_name}</h3>
          </div>
          <div className="col-4 text-right">
            {/*
              Use our DataIcon component to show the stargazers
              count (specify toK to convert to thousands)
            */}
            <DataIcon
              count={data.repo.stargazers_count}
              icon="star"
              className="pr-3"
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
          <div className="col-4">
            <StatCard statName="Open Issues" statCount={data.repo.open_issues_count} />
          </div>

          <div className="col-4">
            <StatCard statName="Commits This Week" statCount={totalCommits} />
          </div>

          <div className="col-4">
            <StatCard statName="Open PRs" statCount={openPullRequests} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Top Contributors</h5>
              </div>
              <ul className="list-group list-group-flush">
                <ContributorsCard data={data.contributors} />
              </ul>
            </div>
          </div>

          <div className="col-6">
            <CommitCard data={commitData} lineColor="blue" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Readme</h5>
                {this.renderReadme(data.readme)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
 * mapStateToProps
 */
function mapStateToProps({ github }, props) {
  // Return the github data as props
  return { data: github };
}

export default connect(mapStateToProps, { fetchRepo })(RepoView);
