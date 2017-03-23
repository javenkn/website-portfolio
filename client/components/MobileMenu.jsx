import React from 'react';
import { connect } from 'react-redux';
import {
  changeTab,
  openTab
} from '../actions/tab.js';

const mapStateToProps = (state) => {
  return state;
};

class MobileMenu extends React.Component {
  render() {
    let navLinks = ['About', 'Projects', 'Contact'];
    let menuArr = [];
    for(let i = 0; i < navLinks.length; i++) {
      menuArr.push(<div key={i} className="mobile-tab">{navLinks[i]}</div>);
    }
    return(
      <div className="nav-menu">
        {menuArr}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeTab,
  openTab
})(MobileMenu);