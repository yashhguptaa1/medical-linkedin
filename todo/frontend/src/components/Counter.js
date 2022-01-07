import React, { useState } from 'react'
import CounterButton from './CounterButton';
import './Counter.css'

const Counter = () => {

    const [totalCount,setCounter] = useState(0);

    const increment = (newCount)=>{
        setCounter(totalCount + newCount);
    }

    const decrement = (newCount)=>{
        setCounter(totalCount - newCount);
    }

    const reset = () =>{
        setCounter(0);
    }

    return (
        <div className="counter">
            <CounterButton incrementMethod={increment} decrementMethod={decrement}/>
            <CounterButton by={6} incrementMethod={increment} decrementMethod={decrement}/>
            <CounterButton by={10} incrementMethod={increment} decrementMethod={decrement}/>
            <span className="count">{totalCount}</span>
            <div><button className="reset" onClick={reset}>Reset</button></div>
        </div>
    )
}

export default Counter
