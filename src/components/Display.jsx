/*eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"; 
import '../styles/index.css'
import uuid4 from "uuid4";
export default function Display({score, setScore, setHighScore,style,sfw,difficulty}){
    const [ccards,setCcards] = useState([]);
    const firstrender = useRef(true);
    const [urlArr,setUrlArr] = useState([]); 
    useEffect(()=>{
        async function getpoke(){
            const response = await fetch('https://api.waifu.pics/'+sfw+'/waifu');
            const data = await response.json();
            return data;
        }
        if(firstrender.current){
            firstrender.current = false;
            let array = [];
        for (let i = 0; i < difficulty; i++) {
            getpoke().then((data)=>{
                array[i]=data.url;
                console.log(data);
            });
        }
        setCcards(array);
      
       }
    },[sfw,difficulty,firstrender,ccards]);
  
    return <div style={style} className="display">
        {ccards.map((card)=>{
            return <div onClick={(e)=>{
                console.log(e.target.src);
                if(urlArr.includes(e.target.src)){
                    console.log('already in array');
                    setScore(0);
                    setHighScore(score)
                    let arr = ccards.sort(()=>Math.random()-0.5);
                    setCcards(arr);
                    setUrlArr([]);
                    
                }else{
                    setUrlArr([...urlArr,e.target.src]);
                    console.log(e.target.src);
                   setScore(score+1);
                   let arr = ccards.sort(()=>Math.random()-0.5);
                   setCcards(arr);
                }

            }} key={uuid4()} className="card">
                <img  key={uuid4()} src={card} alt="card"/>
            </div>  
        })}
    </div>

} 