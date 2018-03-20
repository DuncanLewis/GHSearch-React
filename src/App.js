import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.css';
import Search from './components/search';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search />
      </div>
    </div>
  );
};

export default App;
