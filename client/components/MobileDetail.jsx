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
import '../sass/mobile.scss';

const mapStateToProps = (state) => {
  return state;
};

class MobileDetail extends React.Component {
  render() {
    let content = '';
    let selectedTab = this.props.mobile.mobileSelectedTab;
    let className = '';

    switch(selectedTab) {
      case 'About':
        content = "Hi my name is Javen Nakamoto. I recently graduated from the University of Hawaii at Manoa with a Computer Engineering Bachelor's degree. I am a Full-Stack Javascript developer who is fascinated with engineering technology. I am excited about opportunities to gain more practical knowledge and experience.";
        className = 'mobile-about';
        break;
      case 'Projects':
        const projects = [
          {
            title: 'Running Your Mouth',
            date: 'January 20 - 22, 2017',
            img: runningyourmouth,
            description: 'A voice controlled endless runner game using Unity for the Global Game Jam 2017 Hackathon.'
          },
          {
            title: 'Omni Mood',
            date: 'September - October, 2016',
            img: omnimood,
            description: 'A web application that displays the mood of countries based on emojis coming from Twitter’s real-time feed.'
          },
          {
            title: 'Made in Hawaii',
            date: 'September 2016',
            img: localmocos,
            description: 'A web application that connects local suppliers and consumers with Hawaii grown/organic products.'
          }
        ];
        const getProject =
          <MobileProject
            imgSrc={projects[this.props.mobile.projectIndex].img}
            description={projects[this.props.mobile.projectIndex].description}
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
        content = <div className='linkedin'></div>;
        className = 'mobile-contact';
        break;
    }

    return(
      <div className="mobile-detail">
        <MobileNavBar />
        <MobileMenu />
        <div className="mobile-container">
          <div className="mobile-title">{this.props.mobile.mobileSelectedTab}</div>
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