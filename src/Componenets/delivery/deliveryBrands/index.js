import React from 'react'
import "./delveryBrands.css"
import Slider from 'react-slick';

const brandList=[
    {
        id:1,
        time:"25 min",
        name :"Domino's Pzza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png"
    },
    {
        id:2,
        time:"35 min",
        name:"KFC",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png"
    },
    {
        id:3,
        time:"25min",
        name:"The Belgian waffle co.",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675833718.png"
    },
    {
        id:4,
        time:"34 min",
        name:"Falahar",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/298455f73747ba55fcf4dfd71bd18c41_1673242238.png"
    },
    {
        id:5,
        time:"20 min",
        name:"Mojo Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/12e92e9cea7fb873962c3cd87deccd48_1681458723.png"
    }
];
const  settings = {
    // dots: true,
     infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<nextArrow></nextArrow>,
    prevArrow:<prevArrow></prevArrow>
  };

const DeliveryBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {brandList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt='..'></img>
                        <div className='brand-name'>
                            {brand.name}
                        </div>
                        <div>
                            {brand.time}
                        </div>

                    </div>
                </div>
            })}
        </Slider>
      
    </div>
  )
}

export default DeliveryBrands
