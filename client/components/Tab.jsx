import React from 'react';
import Exit from './Exit.jsx';
require('../sass/exitTab.scss');

export default class Tab extends React.Component {
  render() {
    console.log(this.props.class);
    return (
      <div className="tabWrapper">
        <div className={this.props.class ? "tab " + this.props.class : "tab"} onClick={this.props.selectTab}>{this.props.tabName}</div>
        <Exit handleClose={this.props.closeTab}/>
      </div>
    );
  }
}