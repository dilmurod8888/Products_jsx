import React, { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import { MdGridOn } from 'react-icons/md'


const Basket = () => {
  const [grid, setGrid]= useState(true)
  return (
    <div className="basket">
      <div className="container">
        <div className="basket_top">
          <h2 className="basket_top_title">Basket</h2>
          <button className="basket_top_btn" onClick={()=>setGrid(!grid)}>
            {
              grid ?
              <>
              <FaListUl/>
              <span>List</span>
              </>
              :
              <>
              <MdGridOn/> <span>Grid</span>
              </>
            }
          </button>
        </div>
        <div className="basket_box">
          
        </div>
      </div>
    </div>
  )
}

export default Basket