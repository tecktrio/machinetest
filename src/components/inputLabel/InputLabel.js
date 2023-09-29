import React from 'react'
import './InputLabel.css'
function InputLabel(props) {
  return (
    <div>
        <p className='inputlabel' >{props.label}</p>
    </div>
  )
}

export default InputLabel