import React from 'react';
import Footer from './Footer.jsx';
import MobileNavBar from './MobileNavBar.jsx';
import MobileMenu from './MobileMenu.jsx';
import { connect } from 'react-redux';
import {
  changeTab,
  openTab
} from '../actions/tab.js';

import '../sass/mobile.scss';

const mapStateToProps = (state) => {
  return state;
};

class MobileDetail extends React.Component {
  render() {
    return(
      <div className="mobile-detail">
        <MobileNavBar />
        <MobileMenu />
        <div className="mobile-container">
          <div className="mobile-title">About</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  changeTab,
  openTab
})(MobileDetail);