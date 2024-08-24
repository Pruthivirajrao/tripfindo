import React from 'react'
import "./SmallCard.css";
const SmallCard = (props) => {
  return (
    <div className='small-card'>
        <img src={props.img} alt="" />
        <p className={props.colorCode}>{props.value}</p>
        <div>{props.type}</div>
    </div>
  )
}

export default SmallCard