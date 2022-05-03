import React from 'react'
// import {useState} from 'react'

export default function Listmark() {
    const list = ["a","b","c","x","y","z"];
    const handleClick = () => {
        
    }
  return (
    <div>
        {list.map((item)=>{
            return (
                <div className="list">
                    <div className="listitem">{item}</div>
                    <div className="btn">
                        <button onClick={handleClick}>Select</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
