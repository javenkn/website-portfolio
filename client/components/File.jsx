import React from 'react';
import Info from './Info.jsx';

export default class File extends React.Component {
  render() {

    let content = this.props.content;
    console.log(content);
    let newContent = content.map((element, i) => {
      return <Info key={i} content={element} lineNum={i} />;
    });

    return (
      <div className={this.props.class}>
        {newContent}
      </div>
    );
  }
}