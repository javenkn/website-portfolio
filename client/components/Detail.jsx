import React from 'react';
import Footer from './Footer.jsx';
import NavLink from './NavLink.jsx';
import TabBar from './TabBar.jsx';
import File from './File.jsx';
import Title from './Title.jsx';

import { connect } from 'react-redux';
import {
  changeTab,
  openTab
} from '../actions/tab.js';

require('../sass/detail.scss');

const mapStateToProps = (state) => {
  return state;
};

class Detail extends React.Component {

  render() {
    const openedTabs = this.props.openedTabs;
    const numTabsOpen = this.props.numTabsOpen;
    const selectedTab = this.props.selectedTab;

    const navBarItems = ["About", "Projects", "Contact Me"].map((item, i) => {
      return (
        <NavLink key={i} navName={item} showTab={this.props.openTab.bind(this, item)} />
      );
    });

    let tabDetail = <Title />;
    switch(selectedTab) {
      case 'About':
        tabDetail = <File content='All About Me' />;
        break;
      case 'Projects':
        tabDetail = <File content='My Projects I Worked On' />;
        break;
      case 'Contact Me':
        tabDetail = <File content='Contact Me!' />;
        break;
      default:
        break;
    }

    return (
      <div className="detail">
        <div className="navBar">
          {navBarItems}
        </div>
        <div className="tabContainer">
          <TabBar
            openedTabs={openedTabs}
            numTabsOpen={numTabsOpen}
            selectedTab={selectedTab}
          />
          {tabDetail}
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeTab,
  openTab
})(Detail);