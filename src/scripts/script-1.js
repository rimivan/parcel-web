const hElementInDocument = () => {
  const body = document.querySelector('body');
  const hElement = document.createElement('h1');
  const textNode = document.createTextNode('THIS IS H1');
  hElement.appendChild(textNode);
  body.appendChild(hElement);
};

export {hElementInDocument};
