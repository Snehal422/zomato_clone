import React from 'react'
import CollectionItem from './collectionItem';
import Slider from 'react-slick';
import "./collection.css"

const data=[
    {
        id:1,
        img:"https://b.zmtcdn.com/data/pictures/2/20487032/2b38ec349e4f26e2886262a32af1b0bb_featured_v2.jpg"
    },
    {
        id:2,
        img:"https://b.zmtcdn.com/data/pictures/chains/0/18890430/182427f50841c50f36bd31418cd20a8e.jpg"
    },
    {
        id:3,
        img:"https://b.zmtcdn.com/data/pictures/1/20099071/463ec89acec70ae5461225b52bcfaaf2.jpg"
    },
    {
        id:4,
        img:"https://b.zmtcdn.com/data/pictures/3/20549123/ab77c0655439f75ce5ef5c5c327b1988_featured_v2.jpg"
    },
    {
        id:5,
        img:"https://b.zmtcdn.com/data/pictures/2/18661262/198a2065b0bcd9489a43a744a20c4209_featured_v2.jpg"
    },
    {
        id:6,
        img:"https://b.zmtcdn.com/data/pictures/4/18417624/46d9369998220fa39d89ff5b24b9af58_featured_v2.jpg"
    },
    {
        id:7,
        img:"https://b.zmtcdn.com/data/pictures/0/18292670/5141bd12978b1b1acc2c5398041a58f6_featured_v2.jpg"
    },
    {
        id:8,
        img:""
    }
]


const  settings = {
    // dots: true,
     infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<nextArrow></nextArrow>,
    prevArrow:<prevArrow></prevArrow>
  };

const Collection = () => {
    return (
        <div className="delivery-collections">
            <div className='max-width'>
                <div className='collection-title'>Collection</div>
                Explore curated lists of top restaurants, cafes, pubs, and bars
               
                <Slider {...settings}>{
                    data.map((item)=>{
                        return <CollectionItem item={item}></CollectionItem>
                    })
                }</Slider>
    
            </div>
          
        </div>
    )
}

export default Collection
