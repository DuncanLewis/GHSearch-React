import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-light bg-light mb-4">
    <Link to="/" className="navbar-brand">
      <img src="#" width="30" height="30" className="d-inline-block align-top" alt="" />
        GitHub Search
    </Link>
  </nav>
);

export default Navbar;