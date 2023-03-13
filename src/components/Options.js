import React from 'react'

function Options({options, setOptions}) {

    const handleOptions = (name, op) =>{
        setOptions((prev)=>{
            return {
                ...prev, [name]: op==='i'? options[name]+1:options[name]-1
            }
        })
    }

  return (
    <div className="options">
        <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
                <button
                    disabled={options.adult<=1} 
                    className="optionCounterButton" 
                    onClick={()=>{handleOptions('adult', 'd')}}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={()=>{handleOptions('adult', 'i')}}>+</button>
            </div>
        </div>
        <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
                <button 
                    disabled={options.children<=0} 
                    className="optionCounterButton" onClick={()=>{handleOptions('children', 'd')}}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={()=>{handleOptions('children', 'i')}}>+</button>
            </div>
        </div>
        <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
                <button 
                    disabled={options.room<=1} 
                    className="optionCounterButton" onClick={()=>{handleOptions('room', 'd')}}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton" onClick={()=>{handleOptions('room', 'i')}}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Options