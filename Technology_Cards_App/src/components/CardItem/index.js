import React from 'react'
import './index.css'
const Card = ({cards}) => {
  const {id, title, description, className, imgUrl} = cards

  return (
    <div className={`list-item ${className}`} key={id}>
      <h3 className="heading">{title}</h3>
      <p className="para">{description}</p>

      <img className="img" src={imgUrl} alt={title} />
    </div>
  )
}

export default Card
