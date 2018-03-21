import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepo } from '../../actions';
import DataIcon from '../../components/dataicon';

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
      <div className="row justify-content-between">
        <div className="col-4">
          {data.full_name}
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
    );
  }
}

function mapStateToProps({ github }, props) {
  return { data: github[props.match.params.id] }; // Only pass the repo we are interested in
}

export default connect(mapStateToProps, { fetchRepo })(RepoView);
