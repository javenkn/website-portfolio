import React from 'React';

export default class LineNumber extends React.Component {
  render() {
    return (
      <div className="line">
        {this.props.lineNum}
      </div>
    );
  }
}