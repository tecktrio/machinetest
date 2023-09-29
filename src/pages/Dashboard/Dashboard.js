import React, { useEffect, useState } from 'react'
import GetCookieValue from '../../components/Getcookie'

function Dashboard(props) {
  


        const Firmname = props.data['firm_name']
        const email_address = props.data['email_address']
        const Address_1 = props.data['Address_1']
        const address_2 =props.data['address_2']
        const state = props.data['state']
        const city = props.data['city']
        const postalcode = props.data['postalcode']
        const phone = props.data['phone'] 
        
        const firstname = props.data['firstname']
        const last_name = props.data['last_name']
        const email = props.data['email']
        const primary_phone = props.data['primary_phone']
 

  return (
    <div>
<p>Your firm name is {Firmname}</p>
<p>Your email_address is {email_address}</p>
<p>Your Address_1 is {Address_1}</p>
<p>Your address_2 is {address_2}</p>
<p>Your state is {state}</p>
<p>Your city is {city}</p>
<p>Your postalcode is {postalcode}</p>
<p>Your phone is {phone}</p>
<p>Your firstname is {firstname}</p>
<p>Your last_name is {last_name}</p>
<p>Your firstname is {firstname}</p>
<p>Your email is {email}</p>
<p>Your primary_phone is {primary_phone}</p>
    </div>
  )
}

export default Dashboard