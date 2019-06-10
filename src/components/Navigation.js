import React from 'react';
import { Link } from 'react-router-dom';

const linkStyles = {
  padding: "0 2rem",
  textDecoration: "none"
};

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link style={linkStyles} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link style={linkStyles} to="/about">
            About
          </Link>
        </div>
        <div>
          <Link style={linkStyles} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
