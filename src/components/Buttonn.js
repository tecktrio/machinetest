import React from 'react'

function Buttonn(props) {
  return (
    <div style={{'backgroundColor':'green','padding':'15px','borderRadius':'5px','width':'50px','color':'white','margin':'20px',"fontFamily":'serif'}}>{props.text}</div>
  )
}

export default Buttonn