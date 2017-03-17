import React from 'react';
import LineNumber from './LineNumber.jsx';

export default class Info extends React.Component {
  render() {
    return(
      <div className="infoWrapper">
        <span>
          <LineNumber class="line" lineNum={this.props.lineNum}/>
        </span>
        <div className="info">{this.props.content}</div>
      </div>
    )
  };
}