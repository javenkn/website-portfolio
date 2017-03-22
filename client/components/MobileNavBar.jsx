import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};

class MobileNavBar extends React.Component {
  render() {
    return (
      <div className="mobile-nav">
      </div>
    )
  }
}

export default connect(mapStateToProps)(MobileNavBar);