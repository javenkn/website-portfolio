import React from 'react';

export default class MobileProject extends React.Component {
  render() {
    return(
      <div className="project-container">
        <img src={this.props.imgSrc} onClick={this.props.handleClick}/>
        <span className="project-title">{this.props.title}</span>
        <div className="description">{this.props.description}</div>
      </div>
    )
  };
}