import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useHistory, NavLink, useLocation } from 'react-router-dom'
import "./Recipe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';

const RecipePage = () => {
    const location = useLocation();
    const [dishname, setname] = useState("");
    const [recipeCard, setInfo] = useState([]);
    const [shown, set] = useState(false);

    useEffect(() => {
        if(location.state){
            setname(location.state.dish);
            
            
        }
        set(false)
    }, [])
    const fetchData = async () => {
        set(true);
        
        // e.preventDefault();
        const res = await fetch(`https://api.edamam.com/search?q=${dishname}&app_id=b32ade57&app_key=
      4fc3de2f236498685967a41feda57d37`);
        // console.log(res)
        const data = await res.json();
        const recipe = data.hits;
        // console.log(recipe)

        var recipeData = [];

        for (let i of recipe) {
            const { calories, label, url, ingredientLines, image, source, totalNutrients,healthLabels,yeild } = i.recipe;
            const newdata = { calories, label, url, ingredientLines, image, source, totalNutrients,healthLabels,yeild };
            recipeData.push(newdata)
        }

        console.log(data)
        setInfo(recipeData);
    }
    return (
        <>
            <div className='container-fluid body' style={{ height: "100vh" }}>
                <SearchBar dishname={dishname} setname={setname} fetchData={fetchData} check="false"/>

                {
                    shown == false ? <div className='container p-5 text-center topDist'>
                        <h1>Type Recipe you want to search</h1>
                    </div> :
                        <div className=' container-fluid mx-auto  topDist mb-5 ' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                            {recipeCard.map((ele, id) => {
                                return (
                                    <div key={id} className=" mt-3 mb-2 text-center card-design" style={{ border: "2px solid black", width: "250px" }}>
                                        <div >
                                            <img src={ele.image} alt="Food image" className='w-100 card-design' />
                                            <div>
                                                <div style={{ fontFamily: "revert-layer", fontWeight: "bold", height: "50px", overflow: "hidden" }} className="container">{ele.label}</div>
                                                <hr />
                                                <div><span style={{ fontWeight: "bold" }}> Calories: </span>
                                                    <span> {Math.round(ele.calories)} </span>
                                                    <span> | </span><NavLink to={
                                                        {
                                                            pathname: `${ele.label}/ingredients`,
                                                            aboutProps: {
                                                                ingredients: { ...ele.ingredientLines },
                                                                nutrients: { ...ele.totalNutrients },
                                                                calories:ele.calories,
                                                                label: ele.label,
                                                                image: ele.image,
                                                                source: ele.source,
                                                                url:ele.url,
                                                                healthLabels:{...ele.healthLabels},
                                                                yeild:ele.yeild,
                                                                dishname:dishname,
                                                                setname:setname,
                                                                fetchData:fetchData,
                                                            }
                                                        }

                                                    } style={{ textDecoration: "none" }}> <span className="text-dark">{ele.ingredientLines.length} </span> <span style={{ fontWeight: "bold", color: "black" }}> Ingredients</span> </NavLink>
                                                </div>
                                                <hr />
                                                <a href={`${ele.url}`} style={{ textDecoration: "none", color: "black" }}>{ele.source}<img src="https://static.vecteezy.com/system/resources/previews/000/554/187/original/vector-arrow-icon.jpg" width="20px" /></a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                }


            </div>
        </>
    )
}

export default RecipePage