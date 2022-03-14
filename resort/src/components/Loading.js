import React from 'react'
import loadingImage from "../images/loadingImage.gif";

function Loading() {
  return (
    <div className="loading">
        <h4>
            Rooms data loading...
        </h4>
        <img src={loadingImage} alt=""/>
    </div>
  )
}

export default Loading