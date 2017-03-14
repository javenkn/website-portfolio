import React from 'react';
import Menu from '../components/Menu.jsx';
import Detail from '../components/Detail.jsx';
import Footer from '../components/Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Menu />
        <Detail />
        <Footer />
      </div>
    );
  }
}