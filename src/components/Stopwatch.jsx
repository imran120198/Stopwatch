import  { useRef, useState } from 'react'
import React from 'react';

const Stopwatch = () => {
  
    const[watch, setWatch]=useState(0)

    const timerId=useRef(null);

    const start=()=>{
        if(!timerId.current)
        {
          let id= setInterval(()=>{
            setWatch((prev)=>prev+1);
            },300);
            timerId.current=id;
        }
        };
      
    const pause=()=>{ clearInterval(timerId.current);     timerId.current=null; }
    const reset=()=>{ clearInterval((timerId.current)) ;  setWatch(0);     timerId.current=null;;}

  return (
    <div>
     <h2> Stopwatch</h2>
     <h1>{watch}</h1>
      <button onClick={start} > Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}> Reset</button>
    
    </div>
  )
}

export default Stopwatch