import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Favourites = (props) => {
    const [email,setEmail]=useState();

    useEffect(()=>{
         const mail=props.location.aboutProps.email;
         setEmail(mail);

    },[])
  return (
    <div>Hello {email}</div>
  )
}

export default Favourites