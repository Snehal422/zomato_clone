import React from 'react'
import "./card.css"

const Card = ({item}) => {
  return (
   <div className='main'>
  <div class = "cards-container">
  <div class = "card">
    <div class = "card-media">
      <img src={item.img} alt='name' className='img'></img>
      <div class = "discount">{item.off? item.off:item.hotel.off}% OFF Up to 100</div>
      {/* <div class = "pro-discount">PRO extra 15% OFF</div> */}
      {/* <div class = "delivery-time">{item.time} mins</div> */}
      <div class = "bookmark"></div>
    </div>
    <div class = "card-description">
      <div class = "about-place">
        <div class = "place">
          <p class = "place-name">{item.hotel.name}</p>
          <p class = "place-speciality">{item.hotel.subtitle}</p>
        </div>
        <div class = "place-review">
          <p class = "rating"> {item.hotel.ratings}&#x2605;</p>
          <p class = "per-person"> &#x20b9; {item.price? item.price+"For One":item.hotel.price+"For Two"}</p>
          <div class = "delivery-time">{item.time? item.time+" min":item.hotel.distance+" km"} </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Card
