import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.css';
import Search from './components/search';
import Navbar from './components/navbar';
import RepoList from './components/repoList';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search />
        <RepoList />
      </div>
    </div>
  );
};

export default App;
