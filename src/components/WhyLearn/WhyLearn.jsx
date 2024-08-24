import React from 'react'
import "./WhyLearn.css";
import WhyLearnCard from '../WhyLearnCard/src/components/WhyLearnCard/WhyLearnCard';
import secure_job from "../Assets/Images/secure-a-job.png"
import live_classes from "../Assets/Images/learn-in-live-classes.png"
import level_up from "../Assets/Images/level-up-resume.png"
import mentor_by from "../Assets/Images/mentored-by-best.png"
export const WhyLearn = () => {
  return (
    <div className="whyLearn">
       <div className="whyLearn-about">
        <h3>WHY company</h3>
            <p className="whyLearn-heading">From learning to earning</p>
            <p>Take our courses and we’ll prepare you to be a talent that the industry is looking for!</p>
       </div>
       <div className="whyLearn-cards">
            <WhyLearnCard img={secure_job}  content="Mentored by the industry's top 1%" learn="Learn exclusive insights on things you didn't learn in school"/>
            <WhyLearnCard img={live_classes} down="down" content="Learn in live classes" learn="Learn exclusive insights on things you didn't learn in school"/>
            <WhyLearnCard img={level_up}  content="Level up your resume" learn="Learn exclusive insights on things you didn't learn in school"/>
            <WhyLearnCard img={mentor_by} down="down" content="Secure a job in a dream company" learn="Learn exclusive insights on things you didn't learn in school"/>
       </div>
    </div>
  )
}

export default WhyLearn