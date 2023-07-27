import React, { useState,useEffect } from "react";

import "./delivery.css"
import Filter from "../filters";
import DeliveryCollections from "./deliverCollections";
import DeliveryBrands from "./deliveryBrands";
import ExploreSection from "../exploreSection";
import { resdata } from "../../data/resdata";

const deliveryFilters=[
    {
        id:1,
        icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title:"Filters"
    },
    {
        id:2,
        title:"Rating :4.0+"
    },
    {
        id:3,
        title:"Safe and Hygenic"
    },
    {
        id:4,
        title:"Pure Veg"
    },
    {
        id:5,
        icon:<i class="fi fi-rr-apps-sort absolute-center"></i>,
        title:"Delivery Time"
    },
    {
        id:6,
        title:"Great Offers"
    }
];

const restaurant=resdata;

const Delivery = () => {
    
    return (
        <div>
            <div className="max-width">

                <Filter filterList={deliveryFilters}></Filter>
            </div>
            <DeliveryCollections></DeliveryCollections>
            <DeliveryBrands></DeliveryBrands>
            <ExploreSection list={restaurant} collectionName="Delivery Restaurants in Pune..    "/>
        </div>
    )
}

export default Delivery;