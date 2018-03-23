import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContributorsCard extends Component {
  /*
   * renderAvatar
   * returns an image styled as an avatar
   */
  renderAvatar(url) {
    return (
      <img className="align-self-center mr-2 rounded-circle" src={url} width="32" height="32" />
    );
  }
  /*
   * renderContributors()
   * render each top contributor in the list item as a link, with avatar and total contributions
   *
  */
  render() {
    return _.map(this.props.data, contributor => (
      <Link
        to={contributor.html_url}
        key={contributor.id}
        target="_blank"
        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center media"
      >
        <div>
          {this.renderAvatar(contributor.avatar_url)}
          {contributor.login}
        </div>
        <span className="badge badge-primary badge-pill">{contributor.contributions}</span>
      </Link>
    ));
  }
}

export default ContributorsCard;
