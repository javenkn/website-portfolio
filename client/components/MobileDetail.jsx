import React from 'react';
import Footer from './Footer.jsx';
import MobileNavBar from './MobileNavBar.jsx';
import MobileMenu from './MobileMenu.jsx';
import { connect } from 'react-redux';
import {
  changeTab
} from '../actions/mobile.js';

import '../sass/mobile.scss';

const mapStateToProps = (state) => {
  return state;
};

class MobileDetail extends React.Component {
  render() {
    console.log(this.props.mobile.selectedTab);
    return(
      <div className="mobile-detail">
        <MobileNavBar />
        <MobileMenu />
        <div className="mobile-container">
          <div className="mobile-title">{this.props.mobile.mobileSelectedTab}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  changeTab
})(MobileDetail);