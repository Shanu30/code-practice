import React from 'react'
import {Data} from './Data'
import { useState } from 'react'

export default function SlideShow() {

    const [curr, setCurr] = useState(0)

    const prevImg = () => {
        setCurr(curr===0 ? Data.length-1 : curr-1)
    }
    const nextImg = () => {
        setCurr(curr===Data.length-1 ? 0 : curr+1)
    }

  return (
    <div className="slider">
        <div>
            <button onClick={prevImg} className="left-arrow">prev</button>
        </div>
        
        {Data.map((item, index)=>{
            return (
                <div className={index===curr ? 'slide active' : 'slide'} key= {index}>
                    {index===curr && (<img src={item.img} className="image" alt='slide'/>)}
                    
                </div>
            )
        })}
        <div>
            <button onClick={nextImg} className="right-arrow">next</button>
        </div>
        
    </div>
  )
}
