import React from 'react';
import Footer from './Footer.jsx';
import NavLink from './NavLink.jsx';
import TabBar from './TabBar.jsx';
require('../sass/detail.scss');

export default class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numTabsOpen: 0,
      tabsOpened: []
    };
  }

  showTab(tabName, event) {
    let newTabsOpened = this.state.tabsOpened.slice(); // creates new instance of tabsOpened
    if(newTabsOpened.indexOf(tabName) == -1) {
      newTabsOpened.push(tabName);
    }

    this.setState(prevState => ({
      numTabsOpen: prevState.numTabsOpen + 1,
      tabsOpened: newTabsOpened
    }));
  }

  render() {
    const tabsOpened = this.state.tabsOpened;
    const numTabsOpen = this.state.navClicked;
    const navBarItems = ["About", "Projects", "Contact Me"].map((item, i) => {
      return (
        <NavLink key={i} navName={item} showTab={this.showTab.bind(this, item)} />
      );
    });

    return (
      <div className="detail">
        <div className="navBar">
          {navBarItems}
        </div>
        <TabBar tabsOpened={tabsOpened} numTabsOpen={numTabsOpen}/>
        <Footer />
      </div>
    )
  }
}