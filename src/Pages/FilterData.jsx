import React from 'react'
import { useSelector } from 'react-redux'
import Shop from './Shop'


const FilterData = () => {
    const filterProducts = useSelector(state =>state.product.filteredData)
  return (
 
   <div>
    {filterProducts.map((product)=>(
     <Shop product={product}/>
    ))}
   </div>
  )
}

export default FilterData
