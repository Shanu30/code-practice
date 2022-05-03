import React from 'react'
import { useState } from 'react'


export default function Counter() {
    const [counter, setCounter] = useState(5);

    const handleInc = () => {
        setCounter(counter===10 ? 10 : counter+1)
    } 
    const handleDec = () => {
        setCounter(counter===0 ? 0 : counter-1)
    } 

  return (
    <div className= 'counter'>
        <div>
            <button className= {counter===10 ? 'red' : 'green'} onClick={handleInc}>Increment upto 10</button>
        </div>
        <div>
            <h1>{counter}</h1>
        </div>
        <div>
            <button className= {counter===0 ? 'red' : 'green'} onClick={handleDec}>Decrement upto 0</button>
        </div>
    </div>
  )
}
