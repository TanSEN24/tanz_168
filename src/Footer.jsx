import React from 'react'

function Footer() {
  const openHour = 7
  const closeHour = 16
  const hour = new  Date().getHours()
  const isOpen = hour >= openHour && hour < closeHour
  console.log(isOpen)
  return (
    <div>
      {
        isOpen ? <p>កំពុងបើកដំណើរការ</p>​: 
        <p>ហាយយើងខ្ញុំបើកដំណើរការនៅចន្លោះម៉ោង​ {openHour}:00AM ដល់ម៉ោង {closeHour}:00PM</p>
      }
    </div>
  )
}

export default Footer