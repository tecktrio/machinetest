import React, { useState } from 'react'
import './InputText.css'
function InputText(props) {
    const [value,setvalue] = useState('')
    const [error,seterror] = useState(false)

    
    const lostfocus = ((event)=>{
        // document.cookie = `${props.name}=${value}`
        const name = props.name
        if(name=='firm_name'){ props.updatedata({...props.data,firm_name : value,})}
        if(name=='email_address'){ props.updatedata({...props.data,email_address : value,})}
        if(name=='Address_1'){ props.updatedata({...props.data,Address_1 : value,})}
        if(name=='address_2'){ props.updatedata({...props.data,address_2 : value,})}
        if(name=='State'){ props.updatedata({...props.data,State : value,})}
        if(name=='city'){ props.updatedata({...props.data,city : value,})}
        if(name=='postalcode'){ props.updatedata({...props.data,postalcode : value,})}
        if(name=='phone'){ props.updatedata({...props.data,phone : value,})}
        if(name=='firstname'){ props.updatedata({...props.data,firstname : value,})}
        if(name=='last_name'){ props.updatedata({...props.data,last_name : value,})}
        if(name=='email'){ props.updatedata({...props.data,email : value,})}
        if(name=='primary_phone'){ props.updatedata({...props.data,primary_phone : value,})}
       
        console.log(props.data)

    })
    const handleinput = ((event)=>{
        let ivalue = event.target.value
        setvalue(ivalue)
        if (props.email == "true"){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValidEmail = emailRegex.test(ivalue);
            console.log('validating now',isValidEmail)
            if (isValidEmail == true) { seterror(false);document.cookie = `emailvalidity=false`}
            else{
                seterror(true)
                document.cookie = `emailvalidity=true`

            }
        }
        console.log('validating',ivalue)
    })
    return (
        <div>
            <input className='inputtext' onChange={handleinput} onBlur={lostfocus}/>
            {error? <p style={{'color':'red'}}>Invalid email</p> : null}
                    </div>
    )
}

export default InputText