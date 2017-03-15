import React from 'react';

export default class NavLink extends React.Component {
  render() {
    return (
      <div className="navLink">{this.props.navName}
      </div>
    );
  }
}