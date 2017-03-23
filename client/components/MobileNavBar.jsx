import React from 'react';

export default class MobileNavBar extends React.Component {
  dropMenu() {
    // Drop Down Function
    let menuButton = document.getElementById('menuButton');
    let menuDrop = document.getElementsByClassName('nav-menu')[0];
    menuButton.checked ? menuDrop.className += ' dropped' : menuDrop.className = 'nav-menu';
  }

  render() {
    return (
      <div className="mobile-nav">
        <span>jN</span>
        <input type="checkbox" id="menuButton" onClick={this.dropMenu.bind(this)}/>
        <label htmlFor="menuButton" className="menu-button-label">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </label>
      </div>
    )
  }
}