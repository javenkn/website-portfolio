import React from 'react';
import Exit from './Exit.jsx';
require('../sass/exitTab.scss');

export default class Tab extends React.Component {
  render() {
    return (
      <div className="tabWrapper">
        <div className="tab">{this.props.tabName}</div>
        <Exit />
      </div>
    );
  }
}