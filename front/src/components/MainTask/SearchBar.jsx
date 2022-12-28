import React from 'react'
import "./Recipe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AiFillHeart } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = ({ dishname, setname, fetchData, check,email,name }) => {
    const history = useHistory();
   
    return (
        <div className=' w-100 down'>
            <div className='favourite container'>
                <AiFillHeart />
            </div>
            <div className='container-fluid w-100 fixednav text-center bg-light pb-2 p-3 ' style={{ borderBottom: "1px solid black",display:"flex" }}>
                <div className='col-lg-3 mb-2 container col-xs-3'> <font face="Comic sans MS" size="5" color="black" style={{ textDecoration: "underline" }}>Recipe
                </font><img src='https://cdn-icons-png.flaticon.com/512/1721/1721455.png' style={{ width: "50px" }} /></div>
                <div className='container col-lg-6 col-xs-4'>
                    <form action="#">
                        <div className='container inline w-75  '><input type="text" value={dishname} onChange={(e) => {
                            setname(e.target.value)
                        }} className="form-control w-100 mx-auto" /></div>
                        <div className='container inline small relative'><button type="submit" onClick={(e) => {
                            check == "true" ? history.push({
                                pathname: '/Recipe',
                                state: {  // location state
                                    dish: dishname,
                                    email:email,
                                    name:name
                                },
                            }) : fetchData(); e.preventDefault()
                        }} className="form-control  Search "><AiOutlineSearch/></button></div>
                    </form>

                </div>

                <div className='col-lg-3 container col-xs-1'>
                <span>Hi {name} <img src='https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' style={{ width: "50px" }}></img></span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar