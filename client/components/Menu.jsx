import React from 'react';
import Tab from './Tab.jsx';
import typeWriter from '../lib/typeWriter.js';

export default class App extends React.Component {

  componentDidMount() {
    let typer = document.getElementById('typewriter');
    let typewriter = typeWriter.setupTypewriter(typer);
    typewriter.type();
  }

  render() {
    return (
      <div className="menu">
        <pre id="typewriter">
          <p className="name">Javen_Nakamoto</p>
          <Tab tabName="about" />
          <Tab tabName="projects" />
          <Tab tabName="contactMe" />
        </pre>
      </div>
    );
  }
}