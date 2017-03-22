import React from 'react';
import Footer from './Footer.jsx';
import MobileNavBar from './MobileNavBar.jsx';
import { connect } from 'react-redux';
import {
  changeTab,
  openTab
} from '../actions/tab.js';

import '../sass/mobile.scss';

const mapStateToProps = (state) => {
  return state;
}

class MobileDetail extends React.Component {
  render() {
    return(
      <div className="mobile-detail">
        <MobileNavBar />
        <div className="mobile-container">
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