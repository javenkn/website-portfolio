import React from 'react';
import Menu from '../components/Menu.jsx';
import Detail from '../components/Detail.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Menu />
        <Detail />
      </div>
    );
  }
}