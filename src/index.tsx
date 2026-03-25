import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import * as React from 'react';
const div = document.createElement('div');
document.body.appendChild(div);

const puzzles = [{
    puzzleName: "Hortus Inclusus",
    puzzleAnswer: ["milaensaartje"],
    puzzleHint: "Open envelop \"Lockpick\". Een van de getallen is een 6."
},{
        puzzleName: "Cryptex Doolhof",
    puzzleAnswer: ["471"],
    puzzleHint: "Latitude: 52.158742"
},{
    puzzleName: "Liniaal",
    puzzleAnswer: ["324"],
    puzzleHint:"Kijk goed naar de dieren op de doos. Je zoekt er 5 van klein naar groot."
},
{
    puzzleName: "Crossword",
    puzzleAnswer: ["999", "voerdrienegensin"],
    puzzleHint: "Jullie lieve poezenkindjes zitten heerlijk in hun eigen Hortus Inclusus. Maar hebben jullie al onder Saartje gekeken?"
},{
    puzzleName: "Ark Nova",
    puzzleAnswer: ["04477"],
    puzzleHint: "Longitude: 4.493104"
},{
    puzzleName: "Paper on Paper",
    puzzleAnswer: ["523"],
    puzzleHint: "Goed gedaan! Jullie hebben het slot bijna open. Daarvoor hebben jullie wel de grote gouden sleutel nodig. Deze moet je brengen naar de blek waar de coordinaten naar verwijzen. Alleen dan kun je de echte sleutel vinden om het laatste slot te openen. Succes!"
}
]


const Application = () => {
    return <StrictMode>
        <div style={{width: "100%", display:"flex",  justifyContent: "center", flexDirection:"column", marginTop: "50px"}}>
            <div style={{marginRight: "auto",  backgroundColor: "white", margin: "20px", padding: "5px"}}>
            Vul hier de code in die jullie hebben gevonden voor elke puzzel.
            </div>
            {puzzles.map(puzzle => <PuzzleItem key={puzzle.puzzleName} puzzleName={puzzle.puzzleName} puzzleAnswer={puzzle.puzzleAnswer} puzzleHint={puzzle.puzzleHint}/>)}
    </div>
    </StrictMode>
};

const PuzzleItem = ({puzzleName, puzzleAnswer, puzzleHint}:{puzzleName:string, puzzleAnswer:string[], puzzleHint:string}) => {
    const [code, setCode] = useState(localStorage.getItem(puzzleName) ?? "");
    const correctAnswer = useMemo(() => puzzleAnswer.includes(code), [code, puzzleAnswer]);
    useEffect(()=>{
        localStorage.setItem(puzzleName, code);
    }, [code, puzzleName]);
    const id = React.useId();
    return <div style={{marginRight: "auto",  backgroundColor: "white", margin: "20px",  padding: "5px"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor={id}>{puzzleName}</label>
                <input id={id} value={code} onChange={(e) => setCode(e.target.value)} disabled={correctAnswer} style={{outline: correctAnswer ? "3px solid green" : ""}}/>
            </div>
        {correctAnswer ? <div>
            Hint: {puzzleHint}
        </div>: <></>}
        </div>

}

createRoot(div).render(<Application/>);
