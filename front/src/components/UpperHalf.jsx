import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import InfoSection from './InfoSection'
const UpperHalf = () => {
    return (
        <div className='container-fluid gradient' >
             <Navbar/>
             <InfoSection/>
        </div>
    )
}

export default UpperHalf
