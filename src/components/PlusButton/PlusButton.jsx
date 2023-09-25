import React, {useState} from 'react'

 const PlusButton = (props) => {
    

    return (
        <div>
            <button onClick={props.act}> 
                +
            </button>
        </div>
    )
    }

export default PlusButton;