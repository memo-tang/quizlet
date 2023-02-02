import React, {useState} from 'react';
import CardEditor from "./CardEditor";

const App = (props) => {
  
  // set initial to an array of 2 objects with front and back
  const [cards, setCards] = useState([
    {front: "door", back: "something you can open"},
    {front: "dali cto", back: "pape"}
  ])

  const addCard = (card) => {
    const newCards = cards.slice().concat(card) //make copy of current card and add new card to it
    setCards(newCards) //set cards to newcards
  }
  
  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1)
    setCards(newCards)
  }

  return (
    //pass prop named cards into CardEditor; it will be equal to the initial value
    <CardEditor cards = {cards} addCard = {addCard} deleteCard = {deleteCard}/> 

  );
}

export default App;