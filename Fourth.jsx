import React from 'react'
import './Fourth.css'
import priceing from '../assets/priceing.png'
import expand from '../assets/bar.png'
import bar from '../assets/expand.png'
import pay from '../assets/pay.png'

export default function Fourth() {
    return (
        <>
            <div className='container'>
                <center>
                    <br />
                    <h1 style={{ color: "#4A00E0" }}>Why Choose Us?</h1>
                    <p style={{ fontSize: '15px' }}>We make e-commerce simple, fast & affordable.</p>
                    <br />

                </center>
                <div className='cont-item  '>
                    <span className='cont-child vertical'>
                        <div className='icon'>
                            <img height={30} width={30} src={priceing} alt="" />
                        </div>
                        <div className='title'>Affordable Pricing</div>
                        <div className='discription'>Get a professional e-commerce website & app at a cost that fits your budget. We offer transparent pricing with no hidden charges, ensuring that even small businesses and startups can afford to go online.</div>
                        <div className='fdiv'></div>
                    </span>

                    <span className='fdiv'></span>

                    <span className='cont-child nd'>
                        <div className='icon'>
                            <img height={30} width={30} src={expand} alt="" />
                        </div>
                        <div className='title'>SEO & Mobile Optimized</div>
                        <div className='discription'>Your online store will be fully responsive and mobile-friendly, ensuring a seamless shopping experience on all devices. Plus, we implement SEO best practices so your website ranks higher in search results, bringing in more customers.</div>
                        <div className='fdiv'></div>
                    </span>

                    <br />

                    <span className='cont-child  '>
                        <div className='icon'>
                            <img height={30} width={30} src={bar} alt="" />
                        </div>
                        <div className='title'>Quick Delivery</div>
                        <div className='discription'>Time is money, and we value both! Our streamlined development process ensures that your website and app are ready to launch in just one week, so you can start selling faster than ever.</div>

                    </span>
                    <span className='cont-child nd'>
                        <div className='icon'>
                            <img height={30} width={30} src={pay} alt="" />
                        </div>
                        <div className='title'>Secure Payments</div>
                        <div className='discription'>
                            We integrate secure and trusted payment gateways like Razorpay, PayPal, Stripe, and UPI, allowing your customers to make purchases safely and conveniently without any risk</div>
                    </span>

                </div>
            </div>
            
        </>
    )
}
