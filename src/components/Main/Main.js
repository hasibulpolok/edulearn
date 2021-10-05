import React from 'react';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import ExploreCourse from '../ExploreCourses/ExploreCourses';



const Main = () => {
    return (
        <div>
             <Home/>
             <Courses>Upcoming Courses</Courses>
             <ExploreCourse>Explore Courses</ExploreCourse>
             
        </div>
    );
};

export default Main;