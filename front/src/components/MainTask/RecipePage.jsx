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
    const [datasend, setdatasend] = useState([]);
    const [dataremove,setdataremove]=useState([]);
   useEffect(()=>{
    console.log(datasend)
   },[datasend])
    useEffect(() => {
        if (location.state) {

            setname(location.state.dish);
            a(location.state.dish);
        }
        else
            set(false)
    }, [])

   
    const a = async (dish) => {
        set(true);
        // e.preventDefault();
        const res = await fetch(`https://api.edamam.com/search?q=${dish}&app_id=b32ade57&app_key=
      4fc3de2f236498685967a41feda57d37`);
        // console.log(res)
        const data = await res.json();
        const recipe = data.hits;
        // console.log(recipe)

        var recipeData = [];

        for (let i of recipe) {
            const { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild } = i.recipe;
            const newdata = { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild };
            recipeData.push(newdata)
        }

        console.log(data)
        setInfo(recipeData);
    }

    function handleFavourites(e,ele){
    
         let text=e.target.innerHTML;

        if(text==='Add to favourites'){
             setdatasend([...datasend, ele]);
            e.target.innerHTML="Remove Favourites"
        }
        else{
            const arr=datasend.filter((value,id)=>{
                  return value!==ele;
            })
            setdatasend(arr)
            e.target.innerHTML="Add to favourites"

        }
        
    }

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
            const { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild } = i.recipe;
            const newdata = { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild };
            recipeData.push(newdata)
        }

        console.log(data)
        setInfo(recipeData);
    }
    return (
        <>
            <div className='container-fluid body' style={{ height: "100vh" }}>
                <SearchBar dishname={dishname} setname={setname} fetchData={fetchData} check="false" />

                {
                    shown == false ? <div className='container p-5 text-center topDist GetTop'>
                        <h1>Type Recipe you want to search</h1>
                    </div> :
                        <div className=' container-fluid mx-auto  topDist mb-5 ' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                            {recipeCard.map((ele, id) => {
                                return (
                                    <div key={id} className=" mt-3 mb-2 text-center card-design bg-light onhover" style={{ width: "250px" }}>
                                        <div >
                                            <img src={ele.image} alt="Food image" className='w-100 card-border' />
                                            <div>
                                                <a href={`${ele.url}`} target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFTC7YKP7zkKVpWrWY5Z3AU-TXuHumM3KeQ&usqp=CAU " className='mini-logo' /></a>
                                                <p className='para'> {ele.label}</p>
                                                <div className='flexcalo container'>
                                                    <div style={{ width: "100px" }} >
                                                        <span>
                                                            Calories</span><br />
                                                        <span className='heading'>{Math.round(ele.calories)}</span></div>                                             <NavLink to={
                                                            {
                                                                pathname: `${ele.label}/ingredients`,
                                                                aboutProps: {
                                                                    ingredients: { ...ele.ingredientLines },
                                                                    nutrients: { ...ele.totalNutrients },
                                                                    calories: ele.calories,
                                                                    label: ele.label,
                                                                    image: ele.image,
                                                                    source: ele.source,
                                                                    url: ele.url,
                                                                    healthLabels: { ...ele.healthLabels },
                                                                    yeild: ele.yeild,
                                                                    dishname: dishname,
                                                                    setname: setname,
                                                                    fetchData: fetchData,
                                                                }
                                                            }

                                                        }
                                                            style={{ textDecoration: "none", color: "black", }}>

                                                        <div>

                                                            <span>Ingredients</span>
                                                            <br></br>
                                                            <span className='heading'>{ele.ingredientLines.length}</span>
                                                        </div>
                                                    </NavLink>

                                                </div>
                                                <button type="button" className=" fav btn btn-primary  btn-warning " onClick={(e)=>handleFavourites(e,ele)} >Add to favourites</button>

                                                {/* <div style={{ fontFamily: "revert-layer", fontWeight: "bold", height: "50px", overflow: "hidden" }}>{ele.label}</div> */}
                                                {/* <hr /> */}
                                                {/* <div><span style={{ fontWeight: "bold" }}> Calories: </span>
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
                                                </div> */}
                                                {/* <hr />
                                                <a href={`${ele.url}`} style={{ textDecoration: "none", color: "black" }}>{ele.source}<img src="https://static.vecteezy.com/system/resources/previews/000/554/187/original/vector-arrow-icon.jpg" width="20px" /></a> */}
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