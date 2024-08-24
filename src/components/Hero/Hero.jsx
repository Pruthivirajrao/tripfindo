import React from 'react';
import "./Hero.css";
import hero_img from "../Assets/Images/hero.png";
import hero_tick from "../Assets/Images/hero-tick.png";
import tool_box from "../Assets/Images/tool_box.png";
import zamato from "../Assets/Images/zamato.png";
import shadowfax from "../Assets/Images/shadowfax.png";
import flipkart from "../Assets/Images/flipkart.png";
import razorpay from "../Assets/Images/razorpay.png";
import microsoft from "../Assets/Images/microsoft.png";
import deloitte from "../Assets/Images/deloitte.png";
import lenskart from "../Assets/Images/lenskart.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-right">
            <div className="upskill-partner">
              <img src={hero_tick} alt="" />
              Your upskilling partner
            </div>
            <p className='landJob'>Land Your <span>Dream Job</span> by learning from the top 1%</p>
            <p className='hero-para'>Take your learning organization to the next level. to the next level. Who'll share their knowledge to people around in India.</p>
            <button className="max-btns">View All Courses</button>
            <div className="hero-cards">
              <div>
                <img src={tool_box} alt="" />
                <div className="placement">
                  <p><span>92%</span><br />Job Placement</p>
                </div>
              </div>
              <div>
                <img src={tool_box} alt="" />
                <div className="placement">
                  <p><span>92%</span><br />Job Placement</p>
                </div>
              </div>
            </div>
        </div>

        <div className="hero-left">
          <img src={hero_img} alt="" />
        </div>
      </div>
      <div className="hero-companies">
        <div className="float-jobs"><span>🔥3000+</span> Jobs</div>
        <div className="companies">
          <img src={zamato} alt="" />
          <img src={shadowfax} alt="" />
          <img src={flipkart} alt="" />
          <img src={razorpay} alt="" />
          <img src={microsoft} alt="" />
          <img src={deloitte} alt="" />
          <img src={lenskart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero