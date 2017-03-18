import React from 'react';

export default class Exit extends React.Component {
  render() {
    return (
      <div className='exit'>
        <span className='exitButton' onClick={this.props.handleClose}>&#10005;</span>
      </div>
    );
  }
}