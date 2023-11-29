import './styles/index.css'
import Selection from './components/Selection'
import {useState } from 'react'
import Display from './components/Display';
import Score from './components/Score';
export default function App(){
    const [sfw,setSfw] = useState('nsfw'); 
    const [difficulty,setDifficulty] = useState(6);
    const [start,setStart] = useState(false);
    const [score,setScore] = useState(0);
    const [highScore,setHighScore] = useState(0);
    return <>
            <header>
                <h1>Waifu Memory Card Game</h1>
            </header>
            <main>
              { start && <Score score={score} highScore={highScore}/>}
                { !start &&   <Selection start={start} setSfw={setSfw} setDifficulty={setDifficulty} setStart={setStart} />}
             <Display style={
                {
                    display: start?'grid':'none',
                }
               } score={score} setScore={setScore} setHighScore={setHighScore} sfw={sfw} difficulty={difficulty}/>
            </main> 
            <footer>
                <p>Made By MaliciousBunny</p>
            </footer>
        </>
}