import React from 'react';
import Tab from './Tab.jsx';

export default class NavLink extends React.Component {
  render() {
    return (
      <div className="navLink-wrapper">
        <div className="navLink" onClick={this.props.showTab}>
          {this.props.navName}
        </div>
      </div>
    );
  }
}