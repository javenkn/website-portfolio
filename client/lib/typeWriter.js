const exports = {
  setupTypewriter(t) {
    let HTML = t.innerHTML;

    t.innerHTML = "";

    let cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 150,
        tempTypeSpeed = 0,
        removeAttrChild = 0; // remove blinking cursor

    let type = function() {
      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") { // beginning open bracket
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) { // writing tabs
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = typeSpeed + 50;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") { // finished writing
          tempTypeSpeed = typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            let removeFromElement = document.getElementsByTagName('p')[removeAttrChild];
            if(removeFromElement) {
              removeFromElement.style.borderRight = 'none';
              removeAttrChild += 1;
            }
            let newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
      }
    };

    return {
        type: type
    };
  }
};

export default exports;