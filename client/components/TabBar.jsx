import React from 'react';
import Tab from './Tab.jsx';
import {connect} from 'react-redux';
import {
  changeTab,
  closeTab
} from '../actions/tab.js';
require('../sass/tabBar.scss');

const mapStateToProps = (state) => {
  return state;
};

class TabBar extends React.Component {

  componentDidMount() {
    const tabArr = this.props.tab.openedTabs;
    const navArr = this.props.tab.navLinks;

    for(let i = 0; i < tabArr.length; i++) {
      const welcomeTab = document.getElementsByClassName('tabWrapper')[i];
      if(this.props.tab.selectedTab === tabArr[i]) {
        welcomeTab.style.backgroundColor = '#2B303B';
        welcomeTab.style.color = '#DEE0DC';
        welcomeTab.children[0].className = 'selectedTab';
      }
    }

    for(let j = 0; j < navArr.length; j++) {
      const readmeNav = document.getElementsByClassName('navLink-wrapper')[j];
      if(this.props.tab.selectedTab === navArr[j]) {
        readmeNav.style.backgroundColor = '#343D46';
        readmeNav.style.color = '#DFE1E8';
      }
    }
  }

  componentDidUpdate() {
    const tabArr = this.props.tab.openedTabs;
    const navArr = this.props.tab.navLinks;

    for(let i = 0; i < tabArr.length; i++) { // for loop for the tabs
      const selectedTab = document.getElementsByClassName('tabWrapper')[i];
      if(this.props.tab.selectedTab === tabArr[i]) {
        selectedTab.style.backgroundColor = '#2B303B';
        selectedTab.style.color = '#DEE0DC';
        selectedTab.children[1].style.visibility = 'visible'; // shows the exit X
        selectedTab.children[0].className = 'selectedTab';
      } else {
        selectedTab.style.backgroundColor = '#1C1F26';
        selectedTab.style.color = '#65737F';
        selectedTab.children[1].style.visibility = 'hidden'; // hides the exit X
        selectedTab.children[0].className = 'tab'; // changes class back to tab
      }
    }

    for(let j = 0; j < navArr.length; j++) { // for loop for the navlinks
      const selectedNav = document.getElementsByClassName('navLink-wrapper')[j];
      if(this.props.tab.selectedTab === navArr[j]) { // highlight the correct navlink
        selectedNav.style.backgroundColor = '#343D46';
        selectedNav.style.color = '#DFE1E8';
      } else { // unhighlight the correct navlink
        selectedNav.style.backgroundColor = '';
        selectedNav.style.color = '#65737F';
      }
    }
  }

  render() {
    let openTabs = [];
    const tabArr = this.props.tab.openedTabs;
    for(let i = 0; i < tabArr.length; i++) {
      let contactClass = '';
      let newTab =
      <Tab
        key={i}
        tabName={tabArr[i]}
        selectTab={this.props.changeTab.bind(this, tabArr[i])}
        closeTab={this.props.closeTab.bind(this, tabArr[i])}
      />;
      openTabs.push(newTab);
    }

    return(
      <div className="tabBar">
        {openTabs}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeTab,
  closeTab
})(TabBar);