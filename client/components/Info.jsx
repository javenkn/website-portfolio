import React from 'react';
import LineNumber from './LineNumber.jsx';

export default class Info extends React.Component {
  render() {
    const content = this.props.content.slice();
    const newContent = [];
    let varSplit = content.split(' ');

    if(varSplit.indexOf('let') === 0) { // creates initializing variable
      newContent.push(<span key={0} style={{color: '#B48EAD'}}>let</span>)
      newContent.push(<span key={1} style={{color: '#BF616A'}}>{' ' + varSplit[1] + ' '}</span>)
      varSplit.splice(0, 2);
      newContent.push(varSplit.join(' '));
    } else {
      let word = '';
      let prevChar = '';

      for(let i = 0; i < content.length; i++) { // goes through each letter/word/sentence sets the color
        let currChar = content[i];
        if(currChar === '{' || currChar === '}' || currChar === "'" ||
          currChar === ';' || currChar === ',' || currChar === ']' || currChar === '[' || currChar === '"') { // if the chars are any of these
            if(word.includes('//')) { // website link
              newContent.push(<a href={word} key={Math.random() * 200 + 1} style={{color: '#A2BD8B'}}>{word}</a>);
            } else if(word.includes('@')) {
              newContent.push(<a href={'mailto:' + word} key={Math.random() * 200 + 1} style={{color: '#A2BD8B'}}>{word}</a>);
            } else {
              newContent.push(<span key={Math.random() * 200 + 1} style={{color: '#A2BD8B'}}>{word}</span>);
            }
            word = '';
            newContent.push(<span key={Math.random() * 200 + 1} style={{color: '#DEE0DC'}}>{currChar}</span>);
        } else if(currChar === ':') { // if the char is ':'
          if(prevChar === "'") { // if declaring an obj, color is white
            newContent.push(<span key={Math.random() * 200 + 1} style={{color: '#A2BD8B'}}>{word}</span>);
            word = '';
            newContent.push(<span key={Math.random() * 200 + 1} style={{color: '#DEE0DC'}}>{currChar}</span>);
          } else if(prevChar === 'p' || prevChar === 's') { // for links (https/http)
            word += ':';
          } else { // else it must be a key value pair, color is orange
            newContent.push(<span key={Math.random() * 200 + 1} style={{color: '#A2BD8B'}}>{word}</span>);
            word = '';
            newContent.push(<span className="colon" key={Math.random() * 200 + 1} style={{color: '#D08770'}}>{currChar}</span>);
          }
        } else { // meets none of the statements add to word
          word += currChar;
        }
        prevChar = currChar;
      }
      if(word.length !== 0) { // if the word didn't get pushed to the content array, push it up
        newContent.push(<span key={Math.random() * 200 + 1} style={{color: '#A2BD8B'}}>{word}</span>);
      }
    }

    return(
      <div className="infoWrapper">
        <span>
          <LineNumber class="line" lineNum={this.props.lineNum}/>
        </span>
        <div className="info">{newContent}</div>
      </div>
    )
  };
}