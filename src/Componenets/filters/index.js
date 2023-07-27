import React from 'react'
import FilterItem from './filterItem'
import "./filters.css"

// import Delivery from '../delivery'
const Filter = ({filterList}) => {
  return (
    <div className="filters">
        {filterList && filterList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id}></FilterItem>
        })}
    
    </div>
  )
}

export default Filter
