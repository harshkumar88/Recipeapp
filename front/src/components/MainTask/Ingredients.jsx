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

    <div>
    <SearchBar dishname={dishname} setname={setname} fetchData={fetchData} check="true"/>
    <div className='container-fluid topDist'>
    
      <div className='container-fluid flex-box  bg-light '>

        <div><img src={data.image} className="img-fluid"/></div>
        <div>
          <div>
            <h2>{data.label}</h2>
            <p>See full Recipe <a href={`${data.url}`}>{data.source}</a></p>
            <button className='mt-3'>Favourites</button>
          </div>
        </div>

      </div>


      <div className='container-fluid row bg-light mt-2 w60'>

      <div className="col-lg-6 sm-12">
        <h3>{ingredients.length} Ingredients</h3>
        <hr />
        {ingredients.map((ele, id) => {
          return <div key={id} className="my-2"><span>{ele}</span></div>
        })}
        </div >
          <div className="col-lg-6 sm-12">
            <h3>Nutrition</h3>
            <hr />
            <span className='bold'>{Math.round(data.calories)} </span><span>Calories</span>

            <div className='my-2'>
              {
                 healthLabels.map((ele,id)=>{
                 return (<span className=''>{ele} |</span>)
                 })
              }
            </div>
            <div>
             {
              nutrientsKeys.map((ele,id)=>{
                // console.log(nutrients[ele])
                  return (
                    <div className='my-2'> <span className='ms-0'>{nutrients[ele].label}</span>--<span className='margin-right'>{Math.round(nutrients[ele].quantity)}{nutrients[ele].unit}</span> </div>
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