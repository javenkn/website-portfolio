import React from 'react';
import Footer from './Footer.jsx';
import MobileNavBar from './MobileNavBar.jsx';
import MobileMenu from './MobileMenu.jsx';
import MobileProject from './MobileProject.jsx';
import { connect } from 'react-redux';
import {
  changeTab,
  changeProject
} from '../actions/mobile.js';
import localmocos from 'file-loader!../imgs/localmocos.png';
import omnimood from 'file-loader!../imgs/omnimood.png';
import runningyourmouth from 'file-loader!../imgs/runningyourmouth.png';
import profile from 'file-loader!../imgs/prof.png';
import '../sass/mobile.scss';

const mapStateToProps = (state) => {
  return state;
};

class MobileDetail extends React.Component {

  goToProject(link) {
    window.location.href = link;
  }

  componentDidUpdate() {
    // when component updates close the nav menu (so it doesn't get in the way)
    let menuButton = document.getElementById('menuButton');
    let menuDrop = document.getElementsByClassName('nav-menu')[0];
    menuButton.checked = false;
    menuDrop.className = 'nav-menu';
  }

  render() {
    let content = '';
    let selectedTab = this.props.mobile.mobileSelectedTab;
    let className = '';

    switch(selectedTab) {
      case 'About':
        let intro = "Hi my name is Javen Nakamoto. I recently graduated from the University of Hawaii at Manoa with a Computer Engineering Bachelor's degree. I am a Full-Stack JavaScript developer who is fascinated with engineering technology. I am excited about opportunities to gain more practical knowledge and experience.";
        content =
        <div className="aboutContainer">
          <div className="circlePic" style={{backgroundImage: 'url(' + profile + ')'}}>
          </div>
          <div className="intro">{intro}</div>
        </div>
        className = 'mobile-about';
        break;
      case 'Projects':
        const projects = [
          {
            title: 'Running Your Mouth',
            date: 'January 20 - 22, 2017',
            img: runningyourmouth,
            description: 'A voice controlled endless runner game using Unity for the Global Game Jam 2017 Hackathon.',
            link: 'http://globalgamejam.org/2017/games/running-your-mouth'
          },
          {
            title: 'Omni Mood',
            date: 'September - October, 2016',
            img: omnimood,
            description: 'A web application that displays the mood of countries based on emojis coming from Twitter’s real-time feed.',
            link: 'https://github.com/javenkn/omnimood'
          },
          {
            title: 'Made in Hawaii',
            date: 'September 2016',
            img: localmocos,
            description: 'A web application that connects local suppliers and consumers with Hawaii grown/organic products.',
            link: 'https://github.com/javenkn/localmocos'
          }
        ];
        const getProject =
          <MobileProject
            imgSrc={projects[this.props.mobile.projectIndex].img}
            description={projects[this.props.mobile.projectIndex].description}
            title={projects[this.props.mobile.projectIndex].title}
            handleClick={this.goToProject.bind(this, projects[this.props.mobile.projectIndex].link)}
          />;

        content =
          <div className="mobile-project-container">
            <div className="prev" onClick={this.props.changeProject.bind(this, 'left')}>&#x2039;</div>
            {getProject}
            <div className="next" onClick={this.props.changeProject.bind(this, 'right')}>&#x203a;</div>
          </div>
        className = 'mobile-projects';
        break;
      case 'Contact':
        content =
        <div className="contacts">
          <a className="gmail" href="mailto:javenkn7@gmail.com">javenkn7@gmail.com</a>
          <div className="icons">
            <div className='linkedin'>
              <a href="https://linkedin.com/in/javenkn/" className="fa fa-linkedin-square fa-4x"></a>
            </div>
            <div className='github'>
              <a href="https://github.com/javenkn/" className="fa fa-github-square fa-4x"></a>
            </div>
          </div>
        </div>;
        className = 'mobile-contact';
        break;
    }

    return(
      <div className="mobile-detail">
        <MobileNavBar />
        <MobileMenu />
        <div className="mobile-container">
          <div className="mobile-title">{selectedTab}</div>
          <div className={className}>{content}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  changeTab,
  changeProject
})(MobileDetail);