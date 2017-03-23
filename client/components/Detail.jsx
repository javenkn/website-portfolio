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
require('../sass/tabInfo.scss');

const mapStateToProps = (state) => {
  return state;
};

class Detail extends React.Component {

  render() {
    const openedTabs = this.props.tab.openedTabs;
    const numTabsOpen = this.props.tab.numTabsOpen;
    const selectedTab = this.props.tab.selectedTab;

    const navBarItems = ["README", "about.json", "projects.js", "contact.js"].map((item, i) => {
      return (
        <NavLink key={i} navName={item} showTab={this.props.openTab.bind(this, item)} />
      );
    });

    let tabDetail;

    let content;

    switch(selectedTab) {
      case 'README':
        if(!this.props.tab.openedOnce) {
          content = [
                      'Hi I\'m Javen Nakamoto and...',
                      'welcome to my website!',
                      'Click the files on the left to learn more!'
                    ];
          tabDetail = <File content={content} class="readme" />;
        } else {
          tabDetail = <Title />
        }
        break;
      case 'about.json':
        content = [
                    '{',
                    '\xa0' + '"name": "Javen Nakamoto",',
                    '\xa0' + '"location": "Honolulu, HI",',
                    '\xa0' + '"university": "University of Hawaii at Manoa",',
                    '\xa0' + '"graduated-in": "December 2016",',
                    '\xa0' + '"major": "Computer Engineer",',
                    '\xa0' + '"hobbies": [',
                    '\xa0\xa0' + '"full-stack development","basketball", "fitness", "swimming"',
                    '\xa0' + ']',
                    '}'
                  ];
        tabDetail = <File content={content} class="about" />;
        break;
      case 'projects.js':
        content = [
                    'let projects = [',
                    '\xa0\xa0' + '{',
                    '\xa0\xa0\xa0' + '\'Made in Hawaii\': {',
                    '\xa0\xa0\xa0\xa0' + "description: 'A web application that connects local suppliers and consumers",
                    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "with Hawaii grown/organic products.',",
                    '\xa0\xa0\xa0\xa0' + "date: 'September, 2016',",
                    '\xa0\xa0\xa0\xa0' + "link: 'https://github.com/javenkn/localmocos',",
                    '\xa0\xa0\xa0' + '}',
                    '\xa0\xa0' + '},',
                    '\xa0\xa0' + '{',
                    '\xa0\xa0\xa0' + '\'Omni Mood\': {',
                    '\xa0\xa0\xa0\xa0' + "description: 'A web application that displays the mood of countries based on emojis",
                    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "coming from Twitter’s real-time feed.',",
                    '\xa0\xa0\xa0\xa0' + "date: 'September - October, 2016',",
                    '\xa0\xa0\xa0\xa0' + "link: 'https://github.com/javenkn/omnimood',",
                    '\xa0\xa0\xa0' + '}',
                    '\xa0\xa0' + '},',
                    '\xa0\xa0' +'{',
                    '\xa0\xa0\xa0' + '\'Running Your Mouth\': {',
                    '\xa0\xa0\xa0\xa0' + "description: 'A voice-controlled endless runner game using Unity for",
                    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "Global Game Jam 2017.',",
                    '\xa0\xa0\xa0\xa0' + "date: 'January 20 - 22, 2017',",
                    '\xa0\xa0\xa0\xa0' + "link: 'http://globalgamejam.org/2017/games/running-your-mouth',",
                    '\xa0\xa0\xa0' + '}',
                    '\xa0\xa0' + '},',
                    '];'
                  ]
        tabDetail = <File content={content} class="projects"/>;
        break;
      case 'contact.js':
        content = [
                    'let contactInfo = [',
                    '\xa0' + '{',
                    '\xa0\xa0' + "email: 'javenkn7@gmail.com',",
                    '\xa0' + '},',
                    '\xa0' + '{',
                    '\xa0\xa0' + "linkedin: 'https://linkedin.com/in/javenkn'",
                    '\xa0' + '},',
                    '\xa0' + '{',
                    '\xa0\xa0' + "github: 'https://github.com/javenkn'",
                    '\xa0' + '},',
                    '];'
                  ]
        tabDetail = <File content={content} class="contact"/>;
        break;
      default:
        break;
    }

    return (
      <div className="detail">
        <div className="navBar">
          <div className="navTitle">Javen Nakamoto</div>
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