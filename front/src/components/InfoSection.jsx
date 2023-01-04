import React from 'react'

const InfoSection = () => {
  return (
    <div className='container mt-5' style={{ display: "flex", flexWrap: "wrap" }}>
    <div className='container w-50'>
        <h1 className='fontSize60 font-sans'>Chefs</h1>
        <h1 className='mx-5 fontSize60 font-sans'>Academy</h1>
        <h1 className='mx-2 fontSize60 font-sans'>Secrets</h1>
    </div>

    <div className='container w-50' >
        <img src='https://wallpaperaccess.com/full/3237643.jpg' style={{ borderRadius: "50%", width: "60%", height: "75%" }} />
    </div>

</div>
  )
}

export default InfoSection