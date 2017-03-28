import React from 'react';
import LineNumber from './LineNumber.jsx';
import '../lib/typed.js';
import '../sass/readme.scss';

export default class Title extends React.Component {

  componentDidMount() {
    // sets the first line-title's background color
    document.getElementsByClassName('line-title')[0].style.backgroundColor = '#353C47';
    Typed.new(".title", { // types out title
      strings: ["Hi I'm Javen Nakamoto and..."],
      typeSpeed: 50,
      callback: () => {
          setTimeout(() => { // changes the background color to the next line
            document.getElementsByClassName('typed-cursor')[0].style.display = 'none';
            document.getElementsByClassName('line-title')[0].style.backgroundColor = '#2B303B';
            document.getElementsByClassName('readmeRow')[1].style.display = 'flex';
            document.getElementsByClassName('line-title')[1].style.backgroundColor = '#353C47';

            Typed.new(".subtitle", { // types out second title
              strings: ["welcome to my website!"],
              typeSpeed: 80,
              callback: () => {
                setTimeout(() => { // changes the background color to the next line
                  document.getElementsByClassName('typed-cursor')[1].style.display = 'none';
                  document.getElementsByClassName('line-title')[1].style.backgroundColor = '#2B303B';
                  document.getElementsByClassName('readmeRow')[2].style.display = 'flex';
                  document.getElementsByClassName('line-title')[2].style.backgroundColor = '#353C47';

                  Typed.new(".subtitle2", { // types out third title
                    strings: ["Click the files on the left to learn more!"],
                    typeSpeed: 50
                  });
                }, 500);
              }
            });
          }, 500);
        }
    });
  }

  render() {
    return (
      <div className="readmeContainer">
        <div className="readmeRow">
          <LineNumber class="line-title" lineNum={1} />
          <div className="title"></div>
        </div>
        <div className="readmeRow" style={{display: 'none'}}>
          <LineNumber class="line-title" lineNum={2} />
          <div className="subtitle"></div>
        </div>
        <div className="readmeRow" style={{display: 'none'}}>
          <LineNumber class="line-title" lineNum={3} />
          <div className="subtitle2"></div>
        </div>
      </div>
    );
  }
}