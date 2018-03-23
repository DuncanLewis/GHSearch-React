import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import freeSolid from '@fortawesome/fontawesome-free-solid';
import './styles/index.css';
import Search from './containers/search';
import Navbar from './components/navbar';
import RepoList from './containers/repoList';
import RepoView from './containers/repoView';

fontawesome.library.add(brands, freeSolid);

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            {/* Switch routing and only show the RepoView when a repo is two url params are set */}
            <Route path="/repo/:owner/:name" component={RepoView} />
            <Route path="/" >
              <div>
                <Search />
                <RepoList />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
