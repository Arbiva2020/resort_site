import React from 'react';
import {Link} from "react-router-dom";
import defaultImg from "../images/room1.jpg";

function Room({room}) {
  const {name, slug, images, price} = room;
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} 
        alt="single room" style={{width:"350px", height:"200px"}}/>
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
      </div>
    </article>
  )
}

export default Room