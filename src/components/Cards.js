import React, { useState } from 'react'
import Card from './Card'


const Cards = (props) => {
    let courses = props.courses;
    
    const [likedCourses , setLikedCourses]= useState([]);
    let category = props.category;

    function getCourses() {
        if(category === "All"){
            let allCourses=[];
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4 '>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} 
                    course={course}
                    likedCourses= {likedCourses}
                    setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )


}

export default Cards