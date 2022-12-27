import React from 'react'
import "./Recipe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = ({dishname,setname,fetchData,check}) => {
    const history=useHistory();
    return (
        <div className='w-100 fixednav text-center bg-light pb-2 p-3 row' style={{borderBottom:"1px solid black"}}>
        <div className='col-lg-3 mb-2'> <font face="Comic sans MS" size="5" color="black" style={{textDecoration:"underline"}}>Recipe
    </font><img  src='https://cdn-icons-png.flaticon.com/512/1721/1721455.png' style={{width:"50px"}}/></div>
            <div className='container col-lg-9 col-sm-12'>
                <form action="#">
                    <div className='container inline w-50'><input type="text" value={dishname} onChange={(e) => {
                        setname(e.target.value)
                    }} className="form-control w-100 mx-auto" /></div>
                <div className='container inline small'><button type="submit" onClick={(e)=>{check=="true" ? history.push({
                    pathname: '/Recipe',
                    state: {  // location state
                      dish:dishname
                    },
                  }):fetchData();e.preventDefault()}} className="form-control btn-outline-dark Search ">Search</button></div>
                </form>

            </div>
        </div>
    )
}

export default SearchBar