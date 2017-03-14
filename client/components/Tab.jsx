import React from 'react';

export default class Tab extends React.Component {
  render() {
    return (
      <p className="tab">{this.props.tabName}</p>
    )
  }
}