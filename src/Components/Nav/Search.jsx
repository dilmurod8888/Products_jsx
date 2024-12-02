import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'


const Search = () => {

  return (
<form >
<label className="nav_search_label">
    <input className='nav_input' type="text" placeholder="Search..."  />
    <button className="nav_clear">
    <MdOutlineCancel className="nav_clear_search" />
    </button>
<button  className="nav_search_icon">
<IoSearchOutline  className="nav__search_icon"/>
</button>
    
    </label>
</form>  )
}

export default Search