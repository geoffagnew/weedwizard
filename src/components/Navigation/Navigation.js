import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div id="mainnav" className="py-4 px-5">
        <span><Link to='/'>Weed Wizard</Link></span>
        <nav>
          <ul>
            <li><Link to="/all-strains">All strains</Link></li>
            <li><Link to="/about-weed-wizard">About WW</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;