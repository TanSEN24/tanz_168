import React from 'react'
import CourseCard from './CourseCard'
import { courses } from './data/course'

function CourseList() {
  return (
    <div className="courses">
      {

      }
      
      {
        courses.map((course) =>(
          <CourseCard
          key={course.id}
          title={course.title}
          desc={course.description}
          image={course.image_url}
          price={course.price}
          />
        ))
      }
    </div>
  )
}

export default CourseList