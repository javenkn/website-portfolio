import React from 'react';

export default class Tab extends React.Component {
  render() {
    return (
      <div className="tab">
        <h2>{this.props.tabName}</h2>
      </div>
    )
  }
}