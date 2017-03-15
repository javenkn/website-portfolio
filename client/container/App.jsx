import React from 'react';
import Title from '../components/Title.jsx';
import Detail from '../components/Detail.jsx';
import Footer from '../components/Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Title />
        <Detail />
        <Footer />
      </div>
    );
  }
}