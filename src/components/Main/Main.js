import React from 'react';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import ExploreCourse from '../ExploreCourses/ExploreCourses';
import Rating from '../Ratings/Rating';


const Main = () => {
    return (
        <div>
             <Home/>
             <Courses/>
             <ExploreCourse/>
             <Rating/>
        </div>
    );
};

export default Main;