import React, { useState } from 'react';

function CardViewer(props) {
  const [front, setFrontSide] = useState(true);
  const [index, setIndex] = useState(0);

  const flipCard = () => {
    setFrontSide(!front);
  };
  const goForward = () => {
    setIndex(index + 1);
    setFrontSide(true);
  };
  const goBack = () => {
    setIndex(index - 1);
    setFrontSide(true);
  };

  return (
    <div>
      <h2> Card Viewer </h2>
      <div>
        {front ? props.cards[index].front : props.cards[index].back }
      </div>
      <p> progress bar: card {index + 1} out of {props.cards.length}</p>
      <button type="button" onClick={() => flipCard()}>flip the card</button>
      <hr />
      <button type="button" disabled={index === 0} onClick={() => goBack()}>previous</button>
      <button type="button" disabled={index === props.cards.length - 1} onClick={() => goForward()}>next</button>
      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card editor</button>

    </div>
  );
}

export default CardViewer;
