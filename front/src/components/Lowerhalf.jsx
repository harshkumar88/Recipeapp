import React, { useState } from 'react'
import './Home.css'
import { UilPizzaSlice } from '@iconscout/react-unicons';
import Card1 from "./Card1.jsx"
import Card2 from './Card2.jsx'
import data from './SmallApi.js'

const Lowerhalf = () => {
    const [arr, setType] = useState({
        name:"salad",
        img:"https://th.bing.com/th/id/OIP.b2TdI4CWHm9SVUL7XR4wWQHaFt?pid=ImgDet&w=1024&h=790&rs=1",
        info:"Citrus Salad with Berries"
    });
    return (
        <div className="container-fluid ">
  
            <div>
                <h1 className='ms-5 mt-3 text-black font-sans'>
                    Recipes
                  
          </h1>
            </div>

            <div className="row conatiner-fluid">
                <div className='container col-lg-2 col-sm-8 '>
                    <ul style={{listStyle:"none"}}>
                        <li><button className="mybutton my-1 " onClick={() => setType(data[0])}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuueEd-ym1zIDhCLCI0d8SYArrjN6YkHzfeg&usqp=CAU" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2">Pizza</span></button></li>
                        <li><button className="mybutton my-1 " onClick={() => setType(data[1])}><img src="https://www.bing.com/th?id=OIP.I0Phk4iHeJbt3qfYSlNb8gHaIh&w=233&h=268&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2"> Desert</span></button></li>
                        <li><button className="mybutton  my-1" onClick={() => setType(data[3])}><img src="https://th.bing.com/th/id/OIP.bRmJwM5oet3Lgn2KUiXLlQHaFj?pid=ImgDet&rs=1" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2" >Noodle</span></button></li>
                        <li><button className="mybutton  my-1" onClick={() => setType(data[4])}><img src="https://th.bing.com/th/id/OIP.HWfwNce-zRofYxAYNIDEswHaGv?pid=ImgDet&rs=1" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2">Cocktails</span></button></li>
                        <li><button className="mybutton  my-1" onClick={() => setType(data[2])}><img src="https://th.bing.com/th/id/OIP.lWqkDuh6ymTilP5AN2ODIAHaF6?pid=ImgDet&rs=1" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2">Salad</span></button></li>
                       
                    </ul>
                </div>

                <div className="col-lg-5 col-mid-3 col-sm-5 container">
                    <div>
                        <br />
                        <Card1 {...arr} />
                    </div>

                </div>


                <div className="col-lg-5 col-mid-3 col-sm-5 container">
                    <div>
                        <Card2 {...arr} />
                        <br />
                        <Card2 {...arr} />
                    </div>

                </div>

            </div>


        </div>

    )
}

export default Lowerhalf
