import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepo } from '../../actions';

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
      <div>{data.full_name}</div>
    );
  }
}

function mapStateToProps({ github }, props) {
  return { data: github[props.match.params.id] }; // Only pass the repo we are interested in
}

export default connect(mapStateToProps, { fetchRepo })(RepoView);
