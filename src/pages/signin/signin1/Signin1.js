import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Signin1.css'
import InputLabel from '../../../components/inputLabel/InputLabel'
import InputText from '../../../components/inputText/InputText'
import Buttonn from '../../../components/Buttonn'

function Signin1(props) {

    useEffect(()=>{
        props.setstage(1)
        // props.updatedata({name:'amal'})
       })
  return (
    <div className='main'>
        {/* add firm */}
        <p style={{'color':'red'}}>Required fields firm name, email address, state, phone</p>
        <div>
            
        <InputLabel label='Firm Name'/>
        <InputText name = 'firm_name' updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='Email Address' />
        <InputText name = 'email_address' email='true' updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='Address_1'/>
        <InputText name = 'Address_1' updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='Address 2'/>
        <InputText name = 'address_2' updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='State'/>
        <InputText name = 'State'  updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label="city"/>
        <InputText name = 'city'  updatedata = {props.updatedata} data = {props.data}/>
        
        <InputLabel label='postalcode'/>
        <InputText name = 'postalcode'  updatedata = {props.updatedata} data = {props.data}/>

        <InputLabel label='phone'/>
        <InputText name = 'phone'  updatedata = {props.updatedata} data = {props.data}/>
        
        </div>

<div style={{'display':'flex','justifyContent':'end'}}>
<Link to="/signin2"><Buttonn text="next"/></Link>
    
</div>
    </div>
  )
}

export default Signin1