import React from 'react'
import './index.css'

const DestinationItem = ({destination}) => (
  <li className="destination-item">
    <img className="img1" src={destination.imgUrl} alt={destination.name} />
    <p className="para1">{destination.name}</p>
  </li>
)

export default DestinationItem
