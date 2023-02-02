import React, {useState} from 'react';

const CardEditor = (props) => {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    // loop over
    const cardList = props.cards.map((card, index) => {
        return (
            <tr>
                <td> {card.front} </td>
                <td> {card.back} </td>
                <td><button onClick = {() => props.deleteCard(index)}> delete card </button></td>
            </tr>
        )
    })

    const addAndClear = (card) => {
        props.addCard(card)
        setFront('')
        setBack('')
    }
    
    return (
        <div>
            <h2>Card Editor</h2>
            <table>
                <thead>
                    <tr>
                        <th> Front </th>
                        <th> Back </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {cardList}
                </tbody>
            </table>
            <br/>
            <input placeholder = "front of card" value = {front} onChange = {(e) => setFront(e.target.value)}/>
            <input placeholder = "back of card" value = {back} onChange = {(e) => setBack(e.target.value)}/>
            <button onClick = {() => addAndClear({front, back})}> add card </button>
        </div>
    )
}

export default CardEditor; // other files can see CardEditor