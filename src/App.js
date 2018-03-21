import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import freeSolid from '@fortawesome/fontawesome-free-solid';
import './styles/index.css';
import Search from './containers/search';
import Navbar from './components/navbar';
import RepoList from './containers/repoList';

fontawesome.library.add(brands, freeSolid);

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search />
          <RepoList />
        </div>
      </div>
    );
  }
};