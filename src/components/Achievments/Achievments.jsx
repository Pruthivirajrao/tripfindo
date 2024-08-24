import React from 'react'
import SmallCard from './SmallCard/SmallCard'
import person from "../Assets/Images/instructor.png";
import satisfaction from "../Assets/Images/satisfaction.png";
import student from "../Assets/Images/student.png";
import classes from "../Assets/Images/classes.png";
import "./Achievments.css"
const Achievments = () => {
  return (
    <div className='achievments'>
        <div className="small-cardSection">
        <SmallCard img={person} value="650+" type="STUDENT ENROLLED" colorCode="blue"/>
        <SmallCard img={classes} value="650+" type="STUDENT ENROLLED" colorCode="green"/>
        <SmallCard img={student} value="650+" type="STUDENT ENROLLED" colorCode="violet"/>
        <SmallCard img={satisfaction} value="650+" type="STUDENT ENROLLED" colorCode="red"/>
        </div>
    </div>
  )
}

export default Achievments;