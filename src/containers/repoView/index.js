import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepo } from '../../actions';
import DataIcon from '../../components/dataicon';
import StatCard from '../../components/statCard';

class RepoView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRepo(id);
  }

  render() {
    const { data } = this.props;


    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div className="repo-view">
        <div className="row justify-content-between mb-3">
          <div className="col-4">
            <h3>{data.full_name}</h3>
          </div>
          <div className="col-4">
            {/*
              Use our DataIcon component to show the stargazers
              count (specify toK to convert to thousands)
            */}
            <DataIcon
              count={data.stargazers_count}
              icon="star"
              toK
            />
            <DataIcon
              count={data.forks_count}
              icon="code-branch"
              toK
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.open_issues_count} />
          </div>

          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.open_issues_count} />
          </div>

          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.open_issues_count} />
          </div>

          <div className="col-3">
            <StatCard statName="Open Issues" statCount={data.open_issues_count} />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Top Contributors</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Dan Abramov
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Commits</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Dan Abramov
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ github }, props) {
  return { data: github[props.match.params.id] }; // Only pass the repo we are interested in
}

export default connect(mapStateToProps, { fetchRepo })(RepoView);
