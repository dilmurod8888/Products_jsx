import React from 'react'

const Dilmurod = () => {
    const getData =async()=>{
        const res = await fetch('https://dummyjson.com/products/category-list')
        const res2 =await res.json()
        console.log(res2);
    
    }
    getData()
  return (
    <div>Dilmurod</div>
  )
}
        // {slug:beauty,
        // name:"Beauty",
        // url:"https://dummyjson.com/products/category/beauty"}
export default Dilmurod