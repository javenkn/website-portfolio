import React from 'react';
import { connect } from 'react-redux';
import {
  changeTab,
} from '../actions/mobile.js';

const mapStateToProps = (state) => {
  return state;
};

class MobileMenu extends React.Component {
  render() {
    let navLinks = ['About', 'Projects', 'Contact'];
    let menuArr = [];
    for(let i = 0; i < navLinks.length; i++) {
      menuArr.push(
      <div
        key={i}
        className="mobile-tab"
        onClick={this.props.changeTab.bind(this, navLinks[i])}
      >
        {navLinks[i]}
      </div>);
    }
    return(
      <div className="nav-menu">
        {menuArr}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeTab
})(MobileMenu);