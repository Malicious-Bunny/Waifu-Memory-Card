/*eslint-disable react/prop-types */
export default function Selection({start, setSfw,setDifficulty,setStart}){
    return <div className="selection">
            <div className="difficulty">
                <h2>Difficulty</h2>
                <div className="difficulty-buttons">
                    <button id="easy" onClick={
                        ()=>{
                            setDifficulty(6);   
                            const easy = document.getElementById('easy');
                            const medium = document.getElementById('medium');
                            const hard = document.getElementById('hard');

                            easy.classList.add('clicked');
                            medium.classList.remove('clicked');
                            hard.classList.remove('clicked');
                        }
                    }>Easy</button>
                    <button id="medium" onClick={
                        ()=>{
                            setDifficulty(8);
                            const easy = document.getElementById('easy');
                            const medium = document.getElementById('medium');
                            const hard = document.getElementById('hard');

                            easy.classList.remove('clicked');
                            medium.classList.add('clicked');
                            hard.classList.remove('clicked');
                            
                        }
                    
                    }>Medium</button>
                    <button id="hard" onClick={
                        ()=>{
                            setDifficulty(12);
                            const easy = document.getElementById('easy');
                            const medium = document.getElementById('medium');
                            const hard = document.getElementById('hard');

                            easy.classList.remove('clicked');
                            medium.classList.remove('clicked');
                            hard.classList.add('clicked');
                        }
                    
                    }>Hard</button>
                </div>
            </div>
            <div className="Sfw">
                <h2>SFW</h2>
                <div className="sfw-buttons">
                    <button id="sfw" onClick={
                        ()=>{
                            setSfw('sfw');
                            const nsfw = document.getElementById('nsfw');
                            const sfw = document.getElementById('sfw');
                            nsfw.classList.remove('clicked');
                            sfw.classList.add('clicked');
                        }
                    }>Yes</button>
                    <button id="nsfw" onClick={
                        ()=>{
                            setSfw('nsfw');
                            const nsfw = document.getElementById('nsfw');
                            const sfw = document.getElementById('sfw');
                            nsfw.classList.add('clicked');
                            sfw.classList.remove('clicked');
                        }
                    }>No</button>
                </div>
            </div>
            <div className="Start">
                <button onClick={
                    ()=>{
                        setStart(!start);
                    }
                
                }>Start</button>
            </div>
    </div>
}