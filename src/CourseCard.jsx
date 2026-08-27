import React from 'react'

function CourseCard({title, desc, image, price, soldOut}) {
  return (
    <div className="course-card">
          <img src={image} alt="" className={soldOut ? "soldOut" : "" } />
          <div className="title">
            <h2>{title}</h2>
            <p>{desc}</p>
            <p className="price">${price}</p>
            <span>{soldOut ? "Sold Out" : ""}</span>
          </div>
        </div>  
  )
}

export default CourseCard