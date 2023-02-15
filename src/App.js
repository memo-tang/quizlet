import React, { useState } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) {
  // set initial to an array of 2 objects with front and back
  const [cards, setCards] = useState([
    { front: 'door', back: 'something you can open' },
    { front: 'dali cto', back: 'pape' },
  ]);
  const [editor, setEditor] = useState(true);

  const addCard = (card) => {
    const newCards = cards.slice().concat(card); // make copy of current card and add new card to it
    setCards(newCards); // set cards to newcards
  };

  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const switchMode = () => {
    setEditor(!editor);
  };

  return (
    // pass prop named cards into CardEditor; it will be equal to the initial value
    <div>
      {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} /> : <CardViewer cards={cards} switchMode={switchMode} />}
    </div>

  );
}

export default App;
