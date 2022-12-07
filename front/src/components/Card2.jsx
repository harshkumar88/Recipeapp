import React from 'react'
import './Home.css'
const Card2 = (props) => {
    return (
        <>
            <div className='row  BorderRadius Bgcolor text-black container-fluid ' >

                <div className='col-lg-5 col-mid-12 BorderRadius container' >
                    <img src={props.img} style={{ height: "70%", width: "70%" }} className="BorderRadius" />
                </div>
                <div className="col-lg-7  col-mid-12 BorderRadius container">
                    <div className="container">
                        <h6 className="fontsmall">{props.name}</h6>.
                    </div>
                    <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>

                        <div className=""><span className="fontsmall">Selling</span><p>!!</p> </div>   <div className=""><span className="fontsmall">Selling</span><p>!!</p> </div>

                    </div>
                </div>

            </div>
        </>
    )
}





export default Card2