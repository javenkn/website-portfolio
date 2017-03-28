import React from 'react';

export default class LineNumber extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        {this.props.lineNum}
      </div>
    );
  }
}