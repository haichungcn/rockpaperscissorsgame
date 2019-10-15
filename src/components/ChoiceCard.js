import React from 'react'


export default function ChoiceCard(props) {
    console.log("Props:", props);
    const result = () => {
        if (props.color === 'tie') return 'TIE'
        else if (props.color === 'winner') return 'WON'
        else if (props.color === 'loser') return 'LOST'
        return "RESULT"
    }
    console.log('result', result)
    console.log("classColor", props.color)
    return (
        <div
            className={`choice-card ${props.color}`}
        >
            <h1>{props.title}</h1>
            <div className="imgcontainer">
            <img src={props.imgURL} alt={props.title} />
            </div>
            <h3 className="result">{result()}</h3>
        </div>
    )
}
