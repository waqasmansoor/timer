import React from 'react'
import './TimerButton.css'


const TimerButton:React.FC<{action:()=>void,value:string,className:string}>=({action,value,className})=>{
return(
    <div onClick={action} className={`btn-container ${className}`}>
        <p className="btn-value">{value}</p>
    </div>
)
}

export default TimerButton