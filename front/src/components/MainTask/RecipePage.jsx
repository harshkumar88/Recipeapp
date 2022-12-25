import React from 'react'
import { useState } from 'react'
import {useHistory,NavLink } from 'react-router-dom'

const RecipePage =() => {

    const [dishname,setname]=useState("");
    const [recipeCard,setInfo]=useState([])

    const fetchData=async(e)=>{
      e.preventDefault();
      const res=await fetch(`https://api.edamam.com/search?q=${dishname}&app_id=b32ade57&app_key=
      4fc3de2f236498685967a41feda57d37`);

      const data=await res.json();
      const recipe=data.hits;
      console.log(recipe)
      
      var recipeData=[];
     
      for(let i of recipe){
        const {calories,label,url,ingredientLines,image,source,totalNutrients}=i.recipe;
        const newdata={calories,label,url,ingredientLines,image,source,totalNutrients};
        recipeData.push(newdata)
      }

      console.log(data)
       setInfo(recipeData);
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='text-center container'><h1>Recipe Page</h1></div>
                <div className='container text-center'>
                    <form action="#">
                    <input type="text" value={dishname} onChange={(e)=>{setname(e.target.value)
                    }} />
                    <button type="submit" onClick={fetchData}>Send</button>
                </form>

                </div>
                <div className='row container mx-auto'>
                    {recipeCard.map((ele,id)=>{
                      return (
                        <div key={id} className="col-lg-3 col-md-6 col-sm-12 mt-3">
                            <div>
                                <img src={ele.image} alt="Food image" className='w-100'/>
                          <div>
                            <div>{ele.label}</div>
                            <hr />
                            <div><span> Calories: </span>
                            <span> {Math.round(ele.calories)} </span>
                            <span> | </span><NavLink to={
                                {
                                    pathname:`${ele.label}/ingredients`,
                                    aboutProps:{
                                        ingredients:{...ele.ingredientLines},
                                        nutrients:{...ele.totalNutrients},
                                        label:ele.label,
                                        image:ele.image,
                                        source:ele.source
                                    }
                                } 
                                    
                                }> {ele.ingredientLines.length} <span> Ingredients</span> </NavLink>
                            </div>
                            <hr />
                            <a href={`${ele.url}`}>{ele.source}</a>
                          </div>
                            </div>

                            </div>
                      )
                    })}
                </div>
            </div>
        </>
    )
}

export default RecipePage