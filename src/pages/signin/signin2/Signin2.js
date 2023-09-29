import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputLabel from '../../../components/inputLabel/InputLabel'
import InputText from '../../../components/inputText/InputText'
import Buttonp from '../../../components/Buttonp'
import Buttonn from '../../../components/Buttonn'
import GetCookieValue from '../../../components/Getcookie'

function Signin2(props) {

    const navigate = useNavigate()
useEffect(()=>{
 props.setstage(2)
 if (props.data['firm_name'] == "",props.data['email_address'] == "",props.data['state'] == "",props.data['phone'] == ""){
   navigate('/signin1')
 }


})
  return (
    <div>

                
        <InputLabel label='First Name'/>
        <InputText name = 'firstname' updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='Last Name' />
        <InputText name = 'last_name'updatedata = {props.updatedata} data = {props.data} />

        <InputLabel label='Email Address' />
        <InputText name = 'email'  email = 'true' updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='PrimaryPhone'/>
        <InputText name = 'primary_phone' updatedata = {props.updatedata} data = {props.data}/>

       <div style={{'display':'flex','justifyContent':'end'}}>
       <Link to="/signin1"><Buttonp text = 'previous'/></Link>
    <Link to="/dashboard"><Buttonn text="Confirm"/></Link>
       </div>

    </div>
  )
}

export default Signin2