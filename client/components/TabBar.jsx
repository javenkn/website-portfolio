import React from 'react';
import Tab from './Tab.jsx';
require('../sass/tabBar.scss');

export default class TabBar extends React.Component {

  componentDidMount() {
    const welcomeTab = document.getElementsByClassName('tab')[0];
    welcomeTab.style.backgroundColor = '#2B303B';
    welcomeTab.style.color = '#DEE0DC';
  }

  render() {
    let tabArr = this.props.tabsOpened;
    let openTabs = [];

    for(let i = 0; i < tabArr.length; i++) {
      openTabs.push(<Tab key={i} tabName={tabArr[i]} />);
    }

    return(
      <div className="tabBar">
        {openTabs}
      </div>
    )
  }
}