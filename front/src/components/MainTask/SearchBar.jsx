import React from 'react'
import "./Recipe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai";

const SearchBar = ({ dishname, setname, fetchData, check }) => {
    const history = useHistory();

    return (
        <div className='container-fluid w-100'>
            <div className='favourite container'>
                <AiOutlineHeart />
            </div>
            <div className='container-fluid w-100 fixednav text-center bg-light pb-2 p-3 row' style={{ borderBottom: "1px solid black" }}>
                <div className='col-lg-3 mb-2 container'> <font face="Comic sans MS" size="5" color="black" style={{ textDecoration: "underline" }}>Recipe
                </font><img src='https://cdn-icons-png.flaticon.com/512/1721/1721455.png' style={{ width: "50px" }} /></div>
                <div className='container col-lg-6 '>
                    <form action="#">
                        <div className='container inline w-75'><input type="text" value={dishname} onChange={(e) => {
                            setname(e.target.value)
                        }} className="form-control w-100 mx-auto" /></div>
                        <div className='container inline small'><button type="submit" onClick={(e) => {
                            check == "true" ? history.push({
                                pathname: '/Recipe',
                                state: {  // location state
                                    dish: dishname
                                },
                            }) : fetchData(); e.preventDefault()
                        }} className="form-control btn-outline-dark Search ">Search</button></div>
                    </form>

                </div>

                <div className='col-lg-3 container'>
                    <span>Favourites</span> <span>Hi Nakul <img src='https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' style={{ width: "50px" }}></img></span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar