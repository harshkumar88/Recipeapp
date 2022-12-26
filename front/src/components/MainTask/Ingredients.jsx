import { set } from 'mongoose';
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Ingredients.css"
import SearchBar from './SearchBar';

const Ingredients = (props) => {
  const [data, setdata] = useState({});
  const [ingredients, setingridients] = useState([]);
  const [nutrients, setnutrients] = useState({});
  const [nutrientsKeys, setKeys] = useState([]);
  const [healthLabels,setLabels]=useState([]);
  const [dishname, setname] = useState("");
  const [fetchData,setFunc]=useState();


  useEffect(() => {
    const data = props.location.aboutProps;
    setdata(data);
    const ingredients = Object.values(data.ingredients);
    setingridients(ingredients)
    const nutrientsKeys = Object.keys(data.nutrients);
    setKeys(nutrientsKeys);
    const nutrients = data.nutrients;
    setnutrients(nutrients);
    // console.log(Object.values(data.nutrients)
    setLabels(Object.values(data.healthLabels).slice(0,5));
    setname(data.dishname);
    setFunc(data.fetchData)
    // console.log(data.fetchData)
  }, [])

  return (

    <div className='topDist'>
    <SearchBar dishname={dishname} setname={setname} fetchData={fetchData} check="true"/>
    <div className='container-fluid '>
    
      <div className='container flex-box w-75 bg-light '>

        <div><img src={data.image} style={{ width: "200px" }} /></div>
        <div className='container w-50'>
          <div>
            <h2>{data.label}</h2>
            <p>See full Recipe <a href={`${data.url}`}>{data.source}</a></p>
            <button className='mt-3'>Favourites</button>
          </div>
        </div>

      </div>


      <div className='container flex-box w-100 bg-light mt-2'>

      <div className='container w-50'>
        <h3>Ingredients</h3>
        {ingredients.map((ele, id) => {
          return <div key={id}><span>{ele}</span></div>
        })}
        </div>
          <div className='container w-25 '>
            <h3>Nutrition</h3>
            <div>
              {
                 healthLabels.map((ele,id)=>{
                 return (<span>{ele} |</span>)
                 })
              }
            </div>
            <div>
             {
              nutrientsKeys.map((ele,id)=>{
                // console.log(nutrients[ele])
                  return (
                    <div> <span>{nutrients[ele].label}</span>--<span>{Math.round(nutrients[ele].quantity)}</span> <span>{nutrients[ele].unit}</span></div>
                  )
              })
             }
            </div>
          </div>
        </div>


      

        </div>
</div>

        )
}

        export default Ingredients