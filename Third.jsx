import React from 'react';
import card1 from '../assets/card1.png';
import cart2 from '../assets/cart2.png';
import cart3 from '../assets/cart3.png';
import cart4 from '../assets/cart4.png';
import stock from '../assets/stock.png';
import btnslider from '../assets/btnslider.png';
import box from '../assets/box.png';
import "./Third.css";

export const Third = () => {
  const data = [
    {
      image: card1,
      title: "Fashion E-commerce Store",
      state: '300+ orders per day',
      percentage: "50% increase in customer engagement"
    },
    {
      image: cart2,
      title: "Daily Needs & Grocery Store",
      state: '200+ daily active users',
      percentage: "40% increase in online orders"
    },
    {
      image: cart3,
      title: "Electronics & Gadgets Store",
      state: '500+ monthly high-value orders',
      percentage: "40% increase in online orders"
    },
    {
      image: cart4,
      title: "Skincare & Beauty Brand",
      state: '500+ monthly high-value orders',
      percentage: "60% increase in website traffic"
    },
  ];

  return (
    <div className="third-container">
      <center className='third-header'>
        <h1>Explore Our Work</h1>
        <p>See how we’ve helped businesses thrive online.</p>
      </center>

      <div className="card-container">
        {data.map((value, index) => (
          <div className="card" key={index}>
            <center className="image-container">    
              <img src={value.image} alt={value.title} />
            </center>
            <h3>{value.title}</h3>
            <p className="state"><img src={box} alt="" className="icon"/> {value.state}</p>
            <p className="percentage"><img src={stock} alt="" className="icon"/> {value.percentage}</p>
          </div>
        ))}
      </div>

      <center className='slider-container'>
        <img src={btnslider} alt="Slider" />
      </center>
    </div>
  );
};
