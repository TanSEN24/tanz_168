import React from 'react'

function CourseCard({title, desc, image, price}) {
  return (
    <div className="course-card">
          <img src={image} alt="" />
          <div className="title">
            <h2>{title}</h2>
            <p>{desc}</p>
            <p className="price">${price}</p>
          </div>
        </div>  
  )
}

export default CourseCard