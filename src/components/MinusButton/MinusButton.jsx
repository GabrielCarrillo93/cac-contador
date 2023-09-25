import React from 'react'

const MinusButton = (props) => {

  return (
    <div>
        <button onClick={props.act}>
            -
        </button>
    </div>
  )
}

export default MinusButton;