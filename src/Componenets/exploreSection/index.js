import React from 'react'
import "./exploreSection.css"
import Card from '../card'

const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName} </div>

        <div className='explore-grid'>
            {list.map((item)=>{
                return <Card item={item}></Card>
            })}

        </div>
     
    </div>
  )
}

export default ExploreSection
