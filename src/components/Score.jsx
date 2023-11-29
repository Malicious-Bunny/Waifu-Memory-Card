/*eslint-disable react/prop-types*/
export default function Score({score,highScore}){
    return <div className="Score">
        <div className="score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
    </div>
}