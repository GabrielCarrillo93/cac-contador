import React from 'react'

const CounterScreen = (props) => {
  return (
    <div>
        <input type="number" name='counterScreen' id='counterScreen' value={props.value} readOnly={true}/>
    </div>
  )
}

export default CounterScreen;