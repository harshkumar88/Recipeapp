import React, { useState } from 'react'
import { useEffect } from 'react'

const Ingredients = (props) => {
    const [data,setdata]=useState({});
    const [ingredients,setingridients]=useState([]);
    const[nutrients,setnutrients]=useState({});
    const [nutrientsKeys,setKeys]=useState([]);

          useEffect(()=>{
          const data=props.location.aboutProps;
          setdata(data);
          const ingredients=Object.values(data.ingredients);
          setingridients(ingredients)
          const nutrientsKeys=Object.keys(data.nutrients);
          setKeys(nutrientsKeys);
          const nutrients=data.nutrients;
          setnutrients(nutrients);
          // console.log(Object.values(data.nutrients)
    },[])

  return (
    <div>

      {

        <div>
        {nutrientsKeys.map((ele,id)=>{
          return(
             <div>
              <p>Label:{nutrients[ele].label}</p>
              <p>Quantity:{nutrients[ele].quantity} {nutrients[ele].units}</p>
             </div>
          )
         })
        }
           
           </div>
       }

    </div>
  )
}

export default Ingredients