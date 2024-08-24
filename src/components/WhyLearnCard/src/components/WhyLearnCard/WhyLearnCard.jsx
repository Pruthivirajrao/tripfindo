import React from 'react'
import "./WhyLearnCard.css"
const WhyLearnCard = (props) => {
  return (
    <div className={`whyLearnCard ${props.down}`}>
        <h3>{props.content}</h3>
        <p>{props.learn}</p>
        <img src={props.img} alt="" className={`whyLearn-img`} />
    </div>
  )
}

export default WhyLearnCard