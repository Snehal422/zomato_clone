import React from 'react'
import "./collectionitem.css"

const CollectionItem = ({item}) => {
  return (
    <div>
        <div className='collection-card'>
            <img src={item.img} alt='' className='img'/>

        </div>
      
    </div>
  )
}

export default CollectionItem
