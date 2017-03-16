import React from 'react';
import Tab from './Tab.jsx';
require('../sass/tabBar.scss');

export default class TabBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: props.tabSelected
    };
  }

  componentDidMount() {
    const welcomeTab = document.getElementsByClassName('tabWrapper')[0];
    welcomeTab.style.backgroundColor = '#2B303B';
    welcomeTab.style.color = '#DEE0DC';
  }

  componentDidUpdate() {
    const tabArr = this.props.tabsOpened;
    for(let i = 0; i < tabArr.length; i++) {
      const selectedTab = document.getElementsByClassName('tabWrapper')[i];
      if(this.props.tabSelected === tabArr[i]) {
        selectedTab.style.backgroundColor = '#2B303B';
        selectedTab.style.color = '#DEE0DC';
        selectedTab.children[1].style.visibility = 'visible'; // shows the exit X
        selectedTab.children[0].className += ' no-hover';
      } else {
        selectedTab.style.backgroundColor = '#1C1F26';
        selectedTab.style.color = '#65737F';
        selectedTab.children[1].style.visibility = 'hidden'; // hides the exit X
        selectedTab.children[0].className = selectedTab.children[0].className.slice(0,3); // changes class back to tab only
      }
    }
  }

  selectTab(tab, event) {
    this.setState({selectedTab: tab});
  }

  render() {
    let openTabs = [];
    const tabArr = this.props.tabsOpened;
    for(let i = 0; i < tabArr.length; i++) {
      let newTab = <Tab key={i} tabName={tabArr[i]} selectTab={this.selectTab.bind(this, tabArr[i])} />;
      openTabs.push(newTab);
    }

    return(
      <div className="tabBar">
        {openTabs}
      </div>
    )
  }
}