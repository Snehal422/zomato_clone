import React from 'react'
import "./nightlife.css"

import ExploreSection from '../exploreSection'
import { resdata } from '../../data/resdata'
import { hoteldata } from '../../data/hoteldata'

const restaurant=hoteldata
const Nightlife = () => {
  return (
    <div>
      {/* <DeliveryBrands></DeliveryBrands> */}
         <ExploreSection list={restaurant} collectionName="Delivery Restaurants in Pune..    " />
    </div>
  )
}

export default Nightlife
