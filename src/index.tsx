import { StrictMode, startTransition, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const div = document.createElement('div');
document.body.appendChild(div);


const Application = () => {
    const [code, setCode] = useState(0);
        const [answer, setAnswer] = useState("");
    const correctAnswer = useMemo(() => code===26032026, [code, answer]);
    return <StrictMode>
        <div style={{width: "100%", display:"flex", justifyContent: "center", marginTop: "100px"}}>
            <div style={{margin: "auto",  backgroundColor: "white", padding: "50px"}}>
            <div>
                <label htmlFor="code">Wat is het antwoord op de vraag?</label>
                <input id="code" type="number" value={code} onChange={(e) => setCode(e.target.valueAsNumber)} disabled={correctAnswer}/>
                <label htmlFor="answer">Wat is het antwoord op de vraag?</label>
                <input id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
            </div>
        {correctAnswer ? <div>
            De volgende stap is:
        </div>: <></>}
        </div>
</div>
    </StrictMode>
};

createRoot(div).render(<Application/>);
