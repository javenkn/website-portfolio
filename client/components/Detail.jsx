import React from 'react';
import NavLink from './NavLink.jsx';
require('../sass/detail.scss');

export default class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        <div className="navBar">
          <NavLink navName="About"/>
          <NavLink navName="Projects"/>
          <NavLink navName="Contact Me"/>
        </div>
        <div className="tabBar" />
      </div>
    )
  }
}