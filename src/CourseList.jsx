import React from 'react'
import CourseCard from './CourseCard'

function CourseList() {
  return (
    <div className="courses">
          <CourseCard title="Book1" desc="Decscription Book1" image="1.png" price="10"/>
          <CourseCard title="Book2" desc="Decscription Book2" image="1.png" price="89"/>
          <CourseCard title="Book3" desc="Decscription Book3" image="1.png" price="46"/>
          <CourseCard title="Book3" desc="Decscription Book4" image="1.png" price="31"/>
    </div>
  )
}

export default CourseList