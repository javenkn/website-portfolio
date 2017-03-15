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
      <div id="typewriter">Javen Nakamoto</div>
    );
  }
}