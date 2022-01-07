import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const CounterButton = (props) => {

    // const [currCount,setCounter] = useState(0);

    // const increment = () =>{
    //     setCounter(currCount + );

    // }

    return (
        <div className="counter">
            <button onClick={()=>props.incrementMethod(props.by)}> + {props.by}</button>
            <button onClick={()=>props.decrementMethod(props.by)}> - {props.by}</button>
        </div>
    )
}

CounterButton.defaultProps = {
    by : 3
}

CounterButton.propTypes = {
    by : PropTypes.number
}


export default CounterButton
