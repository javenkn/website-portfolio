import React from 'react';
import Tab from './Tab.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="name">
          <h1>Javen Nakamoto</h1>
        </div>
        <Tab tabName={'About'} />
        <Tab tabName={'Projects'} />
        <Tab tabName={'Contact Me'} />
      </div>
    );
  }
}