import react from 'react'
import { useState, useEffect } from 'react';
import Course from '../Course/Course';

 const [courses , setCourses] = useState([]);
 useEffect(()=>{
     fetch('./courses.JSON')
     .then(res => res.json())
     .then(data => setCourses(data))
 },[])

 console.log(courses);

const Courses = () => {
    return (
        <div>
            <Course></Course>
        </div>
    );
};

export default Courses;