import React, { useState } from 'react';
import './nvbar.css';
import logo from '../assets/logo.png';
import grp22 from '../assets/Group 22.png';
import { GoArrowUpRight } from "react-icons/go";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='firstcont'>
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt="Logo" className='logo'/>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>

          {/* Navigation Links */}
          <div className={`navitems ${menuOpen ? "open" : ""}`}>
            <button className="btngap">View Gallery</button>
            <button className="btngap">About us</button>
            <button
              style={{ backgroundColor: 'black', color: 'white' }}
              className="btngap"
              onClick={() => window.open("/contact", "_blank")}
            >
              Contact us
            </button>
          </div>
        </div>
        <center style={{ backgroundColor: " #F5F5F5",marginTop:"-30px" }}>
          <h1>Get Your E-commerce Website and App</h1>
          <h2>for Just ₹8,999</h2>
          <div style={{ color: "#999999", marginBottom: '10px' }}>
            Fully Responsive | SEO-Optimized | Secure Payment Gateway | Quick Delivery
          </div>

          <button className='enq-btn'>Learn More<GoArrowUpRight /></button>
          <button
            onClick={() => window.open("https://wa.me/919685283772?text=Hello, I am interested in your services.", "_blank")}
            className='enq-btn bookcall'
          >
            <BiSolidPhoneCall /> Book A Call
          </button>

          <br />
          <img src={grp22} className="grp22" alt="Description" />
        </center>
      </div>
    </>
  );
};

export default Navbar;
