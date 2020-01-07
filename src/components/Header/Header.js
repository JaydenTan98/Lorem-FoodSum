import React, { Component } from 'react';
import './Header.css';
import foodLogo from './foodLogo.png';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-container">
          <span className="main-header">Lorem FoodSum</span>
          <span className="header-logo-container"><foodLogo className="header-logo" size={30}/></span>
        </div>
    );
  }
}

export default HeaderComponent;
