import React from 'react';
import Detail from '../components/Detail.jsx';
import MediaQuery from 'react-responsive';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <MediaQuery query='(min-width: 768px)'>
          <Detail />
        </MediaQuery>
        <MediaQuery query='(max-width: 767px)'>
          <div>HELLO</div>
        </MediaQuery>
      </div>
    );
  }
}