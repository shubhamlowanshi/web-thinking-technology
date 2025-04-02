import React from 'react'
import './Secondsec.css'
import Frame22 from '../assets/Frame 22.png'
import frame25 from '../assets/frame 25.png'

const Secondsection = () => {
  return (
   <>
   <center className='sec-container'>
    <h2>Websites & Apps for Every Industry</h2>
    <p>Build & Grow Your Online Presence!</p>

    {/* Image Section */}
    <div className='menu'>
       <img src={Frame22} className='sec-con-img' alt="Industry Types" />
    </div>

    <br /><br /><br />

    {/* Responsive Image */}
    <img className="responsive-img" src={frame25} alt="Frame 25" />
   </center>
   </>
  )
}

export default Secondsection
