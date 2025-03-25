import React from 'react'
import React, { useState, useEffect } from 'react';



export default function CountdownLightSwitch() {
    const[LightMode, setLightMode] = useState(false)
    const[timeEnd, setTimeEnd]=useState(30)
    const[running, setRunning] = useState(false)

    useEffect(()=>{
        document.body.className = LightMode ? 'light' : ''
    }, [LightMode])
    useEffect(()=>{
        let timer;
        if(running && timeEnd>0)
        {
            timer = setInterval(() => {
                setTimeEnd((prev) => prev - 1);
              }, 1000);
        }
        else{
            clearInterval(timer)
            setRunning(false);
        }
        return () => clearInterval(timer);
    }, [running, timeEnd]);

    const progWidth = `${(timeEnd / 30) * 100}%`

  return (
   <div className="container">
    <div className="header">
        <h1>Counddown & Light Switch</h1>
        <div className="toggle-container">
            <label htmlFor="" className='toggle-switch'>
                <input type="checkbox" name="" id="themeToggle" checked={LightMode} onChange={()=>setLightMode((prev)=>! prev)}/>
                <span className='slider'>
                    {LightMode ? 'Light Mode' : 'Dark Mode'}
                </span>
            </label>
            <span>Light Mode</span>
        </div>
    </div>

    <div className="timer-section">
        <div className="progress-bar">
            <div className="progress" id='progress'></div>
        </div>
        <div className="timer" id='timerDisplay'>{timeEnd}s</div>
        <div className="btn-group">
            <button id='startButton' onClick={() => setRunning(true)} disabled={running}>Start Timer</button>
            <button id="resetButton" style={display} onClick={() => { setTimeLeft(30); setRunning(false); }}>Reset Timer</button>
        </div>
        <div className="message" id='messageArea'>{timeLeft === 0 ? 'Time is up!' : ''}</div>
    </div>
   </div>
  )
}
