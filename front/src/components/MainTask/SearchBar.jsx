import React from 'react'
import "./Recipe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AiFillHeart } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import { useState } from 'react';
import { UilUser } from '@iconscout/react-unicons'

const SearchBar = ({ dishname, setname, fetchData, check,email,name }) => {

    const history = useHistory();
    const [checkSize,setSize]=useState(false);
    const [showSearch,setSearch]=useState(false);

    window.onresize = function () {
        var viewport_width = window.innerWidth;
        
        if (viewport_width <= 950) {
            setSize(true);
        }
        else {
            setSize(false)
            setSearch(false)

        }
    };

    useEffect(()=>{
        var viewport_width = window.innerWidth;
        
        if (viewport_width <= 950) {
            setSize(true);
        }
        else {
            setSize(false)
            setSearch(false)
        }
    },[])
    return (
        <div className=' w-100 down'>
            <div className='favourite container'>
                <AiFillHeart className='text-danger pointer' onClick={()=>{
                    history.push({
                        pathname: `${name}/Favourites`,
                        state: {  // location state
                            email:email,
                            name:name
                        }
                    })
                }}/>
            </div>
             {showSearch==false?<div className='container-fluid w-100 fixednav text-center bg-light pb-2 p-3 ' style={{ borderBottom: "1px solid black",display:"flex" }}>
                <div className='col-lg-3 mb-2 container col-xs-3' style={{cursor:"pointer"}}><NavLink to="/"> {checkSize==false?<font face="Comic sans MS"  size={checkSize==true?"5":"5"} color="black"> Recipe
                </font>:""}<img src='https://cdn-icons-png.flaticon.com/512/1721/1721455.png' style={checkSize==true?{width:"20px",transform:"scale(2.3)"}:{width:"50px",transform:"scale(1)"}} /></NavLink></div>
                <div className='container col-lg-6 col-xs-4'>
                {checkSize==true?<AiOutlineSearch onClick={()=>setSearch(true)}   style={checkSize==true?{transform:"scale(3)"}:{transform:"scale(1)"}}/>:
                    <form action="#">
                        <div className='container inline w-75 shadow-none'><input type="text"  value={dishname} onChange={(e) => {
                            setname(e.target.value)
                        }} className="form-control w-100 mx-auto shadow-none " /></div>
                        <div className='container inline small relative '><button type="submit" onClick={(e) => {
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
                    }
                </div>

                <div className='col-lg-3 container col-xs-1' style={checkSize==true?{fontSize:"18px",transform:"scale(1.1)"}:{fontSize:"25px"}}>
                <span>Hi {name} <UilUser></UilUser></span>
                </div>

            </div>:

            <div  className='container-fluid w-100 fixednav text-center bg-light pb-2 p-3 ' style={{ borderBottom: "1px solid black" }}>
                <form action="#">
                        <div className='container inline w-75'><input type="text" value={dishname} onChange={(e) => {
                            setname(e.target.value)
                        }} className="form-control w-100 mx-auto shadow-none" /></div>
                        <div className='container inline small relative'><button type="submit" onClick={(e) => {
                            check == "true" ? history.push({
                                pathname: '/Recipe',
                                state: {  // location state
                                    dish: dishname,
                                    email:email,
                                    name:name
                                },
                            }) : fetchData(); e.preventDefault();setSearch(false)
                        }} className="form-control  Search "><AiOutlineSearch/></button></div>
                    </form>
            </div>}
        </div>
    )
}

export default SearchBar