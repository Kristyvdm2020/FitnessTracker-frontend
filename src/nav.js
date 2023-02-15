import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to='/Home'>Home</Link>
          <Link to='/Activities'>Activities</Link>
          <Link to='/Routines'>Routines</Link>
          <Link to='/Login'>Login</Link>
        </nav>
      </header>
    </div>
  );
};
