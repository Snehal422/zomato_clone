import React from "react";
import "./diningOut.css"
import ExploreSection from "../exploreSection";
import DeliveryBrands from "../delivery/deliveryBrands";

import { resdata } from "../../data/resdata";
import { hoteldata } from "../../data/hoteldata";
import Collection from "../collection";

const restaurant=hoteldata


const DiningOut = () => {
    return (
        <div>
            
            <Collection></Collection>
            {/* <DeliveryCollections></DeliveryCollections> */}
            <DeliveryBrands></DeliveryBrands>
            <ExploreSection list={restaurant} collectionName="Delivery Restaurants in Pune..    " />
        </div>
    )

}

export default DiningOut