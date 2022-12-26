import React from 'react'
import "./Recipe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({dishname,fetchData,setname}) => {
    return (
        <div className='w-100 fixednav text-center bg-light pb-2'>
            <div className='container'>
                <form action="#">

                    <div className='container inline w-50'><input type="text" value={dishname} onChange={(e) => {
                        setname(e.target.value)
                    }} className="form-control w-100 mx-auto" /></div>
                    <div className='container inline small'><button type="submit" onClick={()=>fetchData} className="form-control btn-outline-dark Search "><FontAwesomeIcon icon={faSearch} /></button></div>
                </form>

            </div>
        </div>
    )
}

export default SearchBar