import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};

class MobileNavBar extends React.Component {
  render() {
    return (
      <div className="mobile-nav">
        <span>jN</span>
        <input type="checkbox" id="menuButton" />
        <label htmlFor="menuButton" className="menu-button-label">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </label>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MobileNavBar);