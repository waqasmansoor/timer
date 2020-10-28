import React,{useState} from 'react'
import TimerButton from './TimerButton'
import './Timer.css'


let myIntrvl: number | undefined
const  Timer=()=>{
    const [showResume,setShowResume]=useState(false)
    const [startBtnDsbld,setStartBtnDsbld]=useState(false)
    const [time,setTime]=React.useState({
        minutes:25,
        seconds:0,
        running:'off'
    })
    
    
function startTimer(){
    setTime({...time,running:'on'})
    
        let sec=time.seconds
        let min=time.minutes
        setTime({...time,running:'on'})
        myIntrvl=window.setInterval(()=>{
        

            if(sec===0){
                if(min===0){window.clearInterval(myIntrvl)
                }
                else{
                    sec=59
                    min=min-1
                    setTime({
                        
                            seconds:sec,
                            minutes:min,
                            running:'on'
                            
                        
                    })
                }
            }
            else{
                
                sec=sec-1
                setTime({
                    
                         seconds:sec,
                         minutes:min,
                         running:'on'
                        
                    
                })
            }
        },1000)
    setShowResume(false)
    setStartBtnDsbld(true)
    
}
function pauseTimer(){
    window.clearInterval(myIntrvl)
    setTime({...time,running:'off'})
    setShowResume(true)
}
function resetTimer(){
    pauseTimer()
    setTime({seconds:0,minutes:25,running:'off'})
    setShowResume(false)
    setStartBtnDsbld(false)
    

}

    return(
        <div className='timer'>
            
            <div className="timer-time">
                {time.minutes}:{time.seconds<10?'0':''}{time.seconds}
            </div>
            <div className="timer-btns">
                <TimerButton 
                className={`start-timer ${startBtnDsbld?"start-timer-dsbld":""}`}
                action={startTimer} value={'Start'}/>
                <div className={startBtnDsbld?"pause-reset-btn":"pause-reset-btn-dsbld"}>
                    <TimerButton 
                    className="pause-timer"
                    action={showResume?startTimer:pauseTimer} value={showResume?'Resume':'Pause'}/>
                    <TimerButton 
                    className="reset-timer"
                    action={resetTimer} value={'Reset'}/>
                </div>
            </div>
        </div>
    )
}

export default Timer